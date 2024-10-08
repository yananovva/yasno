// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
const port = 5002;


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/api/courses', (req, res) => {
    res.json({
        "courses": [
            {
                "id": 1,
                "name": "Психология развития",
                "image": "@/public/course_item-1.png"
            },
            {
                "id": 2,
                "name": "Семейная психология",
                "image": "@/public/course_item-2.png"
            },
            {
                "id": 3,
                "name": "Детская психология",
                "image": "@/public/course_item-3.png"
            }
        ]
    });
});

app.post('/api/add-course', (req, res) => {
    const receivedCourse = req.body;
    res.json({message: 'Course received!', receivedCourse});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
