const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
  organization: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
});


const Contact = mongoose.model('Contacts', ContactSchema);

module.exports = Contact;
