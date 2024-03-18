const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const users = [
    { id: 1, username: 'siva', password: 'siv@2024' }
];

exports.login = (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};
