const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Shows were fetched'
    });
});

router.post('/', (req, res, next) => {
    const show = {
        userId: req.body.userId,
        title: req.body.title,
        plot: req.body.plot
    };

    res.status(201).json({
        message: 'Show was created',
        show: show
    });
});

router.get('/:showId', (req, res, next) => {
    res.status(200).json({
        message: 'Shows detail',
        showId: req.params.showId
    });
});

router.patch('/:showId', (req, res, next) => {
    res.status(290).json({
        message: 'Show updated'
    });
});

router.put('/:showId', (req, res, next) => {
    res.status(290).json({
        message: 'Show completely updated'
    });
});

router.delete('/:showId', (req, res, next) => {
    res.status(200).json({
        message: 'Shows deleted',
        showId: req.params.showId
    });
});


module.exports = router;

