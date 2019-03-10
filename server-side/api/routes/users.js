const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request TO /users'
    });
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email
    };

    res.status(200).json({
        message: 'Handling POST request TO /users',
        createUser: user
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the special id!',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:userId', (req, res, next) => {
    res.status(290).json({
        message: 'User updated'
    });
});

router.put('/:userId', (req, res, next) => {
    res.status(290).json({
        message: 'User completely updated'  
    });
});



module.exports = router;

