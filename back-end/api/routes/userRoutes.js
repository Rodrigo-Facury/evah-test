const express = require('express');
const router = express.Router();

router.post('/login', (_req, res) => res.json({ message: 'login' }))

module.exports = router;
