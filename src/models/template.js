import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/templates');

const TEMPLATE_SCHEMA = mongoose.Schema({
  title: String,
  contents: String
}, { collection: 'templates' });

const Template = mongoose.model('Template', TEMPLATE_SCHEMA);;

export default Template;
