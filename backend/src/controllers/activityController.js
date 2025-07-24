const { Activity, Child } = require('../models');
const { generateActivity } = require('../services/openaiService');

const createActivity = async (req, res) => {
  const { childId, prompt, type, title } = req.body;

  const child = await Child.findByPk(childId);
  if (!child) {
    return res.status(404).json({ error: 'Niño no encontrado' });
  }

  if (!childId || !prompt || !type || !title) {
    return res.status(400).json({ error: 'Faltan campos obligatorios en el body' });
  }

  try {
    const content = await generateActivity(prompt);

    const activity = await Activity.create({
      childId,
      type,
      title,
      content: { text: content },
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createActivity };
