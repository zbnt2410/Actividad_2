const { User } = require('../models');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario (padre o terapeuta)
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Campos obligatorios: name, email, password, role' });
  }

  if (!['therapist', 'parent'].includes(role)) {
    return res.status(400).json({ error: "El campo 'role' debe ser 'therapist' o 'parent'" });
  }

  try {
    // Verificar si el correo ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Ocultar contraseña en la respuesta
    const userResponse = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt,
    };

    res.status(201).json(userResponse);
  } catch (error) {
    console.error('❌ Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error interno al registrar usuario' });
  }
};

module.exports = { registerUser };
