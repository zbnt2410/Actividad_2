const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const path = require('path');


// Cargar las credenciales
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: 'src/config/google-credentials.json',
});

const synthesizeSpeech = async (text) => {
  try {
    const request = {
      input: { text },
      voice: { languageCode: 'es-ES', ssmlGender: 'FEMALE' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);

    // Directorio y archivo de audio
    const audioDir = path.join(__dirname,'..', 'public', 'audio');
    const fileName = `output-${Date.now()}.mp3`;
    const fullPath = path.join(audioDir, fileName);

    // Asegurarse que la carpeta existe
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // Guardar archivo
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(fullPath, response.audioContent, 'binary');

    return `/audio/${fileName}`;
    } catch (error) {
        console.error('❌ Google TTS Error:', error);
        throw new Error('Error generating audio');
    }
};

module.exports = { synthesizeSpeech };
