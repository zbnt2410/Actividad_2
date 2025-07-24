const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { initDB } = require('./models');
initDB();

const app = express(); //Esto va primero

const path = require('path');
app.use('/audio', express.static(path.join(__dirname, 'src', 'public', 'audio')));

const activityRoutes = require('./routes/activityRoutes');
const childRoutes = require('./routes/childRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const ttsRoutes = require('./routes/ttsRoutes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/activities', activityRoutes);
app.use('/api/children', childRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tts', ttsRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('SpeechDown API is running 🎤');
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});