import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

const saltRounds = 10;
router.get('/', (req, res, next) => {
	res.send('<h1>Hola hola</h1>');
});
router.get('/aa', (req, res, next) => {
	res.send('<h1>aa hola</h1>');
});

export { router };
