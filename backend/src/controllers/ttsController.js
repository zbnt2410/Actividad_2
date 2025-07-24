const { synthesizeSpeech } = require('../services/googleTTSService');

const generateAudio = async (req, res) => {
  const { text } = req.body;
  try {
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const audioPath = await synthesizeSpeech(text);
    res.status(200).json({ audioUrl: audioPath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { generateAudio };
