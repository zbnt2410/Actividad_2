const { Child, User } = require('../models');

// Crear un niño asociado a un usuario existente
const createChild = async (req, res) => {
  const { userId, name, age, diagnosis } = req.body;

  if (!userId || !name || !age) {
    return res.status(400).json({ error: 'Campos obligatorios: userId, name, age' });
  }

  try {
    // Verifica que el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const child = await Child.create({
      userId,
      name,
      age,
      diagnosis: diagnosis || 'Síndrome de Down',
    });

    res.status(201).json(child);
  } catch (error) {
    console.error('❌ Error al crear niño:', error);
    res.status(500).json({ error: 'Error interno al crear niño' });
  }
};

// Obtener todos los niños asociados a un usuario
const getAllChildren = async (req, res) => {
  try {
    const children = await Child.findAll(); // ✅ sin filtro por usuario
    res.json(children);
  } catch (error) {
    console.error('❌ Error al obtener todos los niños:', error);
    res.status(500).json({ error: 'Error al recuperar niños' });
  }
};

// GET all children for a user
const getChildren = async (req, res) => {
  try {
    const children = await Child.findAll({ where: { userId: req.user.id } });
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// PUT update a child
const updateChild = async (req, res) => {
  const { id } = req.params;
  const { name, age, diagnosis } = req.body;
  try {
    const child = await Child.findByPk(id);
    if (!child || child.userId !== req.user.id) {
      return res.status(404).json({ error: 'Child not found' });
    }
    await child.update({ name, age, diagnosis });
    res.json(child);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a child
const deleteChild = async (req, res) => {
  const { id } = req.params;
  try {
    const child = await Child.findByPk(id);
    if (!child || child.userId !== req.user.id) {
      return res.status(404).json({ error: 'Child not found' });
    }
    await child.destroy();
    res.json({ message: 'Child deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createChild,
  //getChildrenByUser,
  getAllChildren,
};