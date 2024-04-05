const router = require('express').Router();
const notesRouter = require('./notes');
const htmlRouter = require('./html');

router.use('/api', notesRouter);
router.use('/', htmlRouter);

module.exports = router;
