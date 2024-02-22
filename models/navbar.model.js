import mongoose from 'mongoose';

const resources = new mongoose.Schema({
    products:{
        type: String,
        required: true,
        unique: true,
    },
    aboutus:{
        type: String,
        required: true,
        unique: true,
    },
    blog:{
        type: String,
        required: true,
        unique: true,
    },
    services:{
        type: String,
        required: true,
        unique: true,
    },
    support:{
        type: String,
        required: true,
        unique: true,
    },
    contact:{
        type: String,
        required: true,
        unique: true,
    },
    news:{
        type: String,
        required: true,
        unique: true,
    },
    products:{
        type: String,
        required: true,
        unique: true,
    },
    offers:{
        type: String,
        required: true,
        unique: true,
    },
})

const navbarSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      unique: true,
    },
    resource: [resources],
    contactus: {
      type: String,
      required: true,
      unique: true,
    },
  },
);

const Navbar = mongoose.model('Navbar', navbarSchema);

export default Navbar;
