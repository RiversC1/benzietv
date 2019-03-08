const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request TO /users'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request TO /users'
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
        message: 'User totally updated'
    });
});





module.exports = router;

