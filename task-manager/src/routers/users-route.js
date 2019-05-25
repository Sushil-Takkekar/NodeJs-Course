const express = require('express');
const router = new express.Router();
const users = require('../db_operations/users_operations');
const auth = require('../middleware/auth');

// create new user
router.post('/users', (req, res) => {
    users.create_user(req.body).then((data) => {
        res.status(201).send(data);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// login user
router.post('/users/login', async (req, res) => {
    try {
        const user = await users.login_user(req.body.email, req.body.password);
        res.send(user);
    }catch(err) {
        res.status(401).send({ error: err+"" });
    }
});

// logout user
router.post('/users/logout', auth, async (req, res) => {
    try {
        const result = await users.logout_user(req.user, req.token);
        res.send(result);
    }catch(err) {
        res.status(500).send({ error: err+"" });
    }
});

// get user profile
router.get('/users/me', auth, async (req, res) => {
    try {
        const data = await users.get_user(req.user._id);
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send(err);
    }
});

// get single user (written using async-await)
// router.get('/users/:id', auth, async (req, res) => {
//     try {
//         const data = await users.get_user(req.params.id);
//         res.status(200).send(data);
//     }catch(err) {
//         res.status(500).send(err);
//     }
// });

// update user
router.patch('/users/me', auth, async (req, res) => {
    try {
        const data = await users.update_user(req.user._id, req.body);
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send(err);
    }
});

// delete user
router.delete('/users/me', auth, async (req, res) => {
    try {
        const data = await users.delete_user(req.user._id);
        res.status(200).send({ msg: 'User '+req.user.email+' deleted sucessfully !' });
    }catch(e) {
        res.status(500).send();
    }
});

module.exports = router;