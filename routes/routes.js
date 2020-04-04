const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: './files',
	filename(req, file, cb) {
		console.log(file)
		cb(null, `${Date.now().toString()}-${file.originalname.replace(' ', '')}`);
	},
});

const upload = multer({ storage });

router.get('/health', (req, res) => {
	res.send('OK Healthy');
})

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.post('/', async (req, res) => {
	try {
		let newUser = new User({
			name: req.body.name,
			phone: req.body.phone
		});
		await newUser.save();
		res.redirect('/api/users/')
	} catch (err) {
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.put('/:id', async (req, res) => {
	try {
		let user = await User.findByIdAndUpdate(req.params.id);
		user.name = req.body.name;
		user.phone = req.body.phone;
		user.address = req.body.address;
		user.image = req.body.image;
		await user.save();
		res.status(200).send(user)
	} catch (err) {
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.send(user);
	} catch (err) {
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndRemove(req.params.id);
		res.redirect('/api/users/')
	} catch (err) {
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.post('/files', upload.single('file'), (req, res) => {
	const file = req.file;
	const meta = req.body
	res.status(200).send(file)
})

router.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../files'));
});

module.exports = router;