const express = require('express');
const router = new express.Router();
const validator = require('validator');
const { sendContactEmail } = require('../emailSIB');

router.post('/email', async (req, res) => {
  try {
    if (!req.body.subject || !req.body.email || !req.body.body) {
      throw new Error('Subject, Email and Body are required');
    }

    if (!validator.isEmail(req.body.email)) {
      throw new Error('email is invalid');
    }

    sendContactEmail(req.body.subject, req.body.email, req.body.body);
    res.status(201).json({
      subj: req.body.subject,
      email: req.body.email,
      body: req.body.body,
    });
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
});

module.exports = router;
