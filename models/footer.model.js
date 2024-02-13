import mongoose from 'mongoose';

const footerSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      unique: true,
    },
    para: {
      type: String,
      required: true,
      unique: true,
    },
    buttonText: {
      type: String,
      required: true,
      unique: true,
    },
    buttonLink: {
        type: String,
        required: true,
        unique: true,
    },
    LinkText1: {
        type: String,
        required: true,
        unique: true,
    },
    Link1: {
        type: String,
        unique: true,
        default: "/"
    },
    LinkText2: {
        type: String,
        required: true,
        unique: true,
    },
    Link2: {
        type: String,
        required: true,
        unique: true,
    },
    LinkText3: {
        type: String,
        required: true,
        unique: true,
    },
    Link3: {
        type: String,
        required: true,
        unique: true,
    },
    LinkText4: {
        type: String,
        required: true,
        unique: true,
    },
    Link4: {
        type: String,
        required: true,
        unique: true,
    },
    LinkText5: {
        type: String,
        required: true,
        unique: true,
    },
    Link5: {
        type: String,
        required: true,
        unique: true,
    },
    twitter: {
        type: String,
        required: true,
        unique: true,
    },
    instagram: {
        type: String,
        required: true,
        unique: true,
    },
    linkedin: {
        type: String,
        required: true,
        unique: true,
    },
    youtube: {
        type: String,
        required: true,
        unique: true,
    },
    copyright: {
        type: String,
        required: true,
        unique: true,
    },
  },
);

const Footer = mongoose.model('Footer', footerSchema);

export default Footer;
