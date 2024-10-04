// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
const port = 5002;


const cors = require('cors');
app.use(cors());

// Middleware для работы с JSON
app.use(express.json());

// Простая точка GET запроса
app.get('/api/courses', (req, res) => {
    res.json({
        "courses": [
            {
                "id": 1,
                "name": "Психология развития",
                "image": "https://images.app.goo.gl/7WFkTCoYyFCdaVDd8"
            },
            {
                "id": 2,
                "name": "Семейная психология",
                "image": "https://images.app.goo.gl/9VrrdxcaixxRtfUD9"
            },
            {
                "id": 3,
                "name": "Детская психология",
                "image": "https://images.app.goo.gl/rCcryV32ZKGr4siy7"
            }
        ]
    });
});

// Пример POST запроса
app.post('/api/add-course', (req, res) => {
    const receivedCourse = req.body;
    res.json({message: 'Course received!', receivedCourse});
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
