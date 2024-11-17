const express = require('express');
const router = express.Router();
const Contact = require('../model/contact');


router.get('/contact-details', async (req, res) => {
  try {
    
    const contactDetails = await Contact.findOne();
    if (!contactDetails) {
      return res.status(404).json({ message: 'Contact details not found.' });
    }
    res.status(200).json(contactDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact details', error });
  }
});


module.exports = router;
