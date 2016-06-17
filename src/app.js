import fs from 'fs';
import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const logger = require('morgan');

const getTemplateContents = (filename, readMethod) => {
  return readMethod.apply(null, filename);
};

const compileTemplateWithData = (data, template) => {
  return ejs.render(template, data)
};

const sendCompiledTemplate = (response, template) => {
  response.json({ template });
};

const compile = (request, response) => {
  const { templateId, data } = request.body;
  Template.find({ id: templateId })
    .then(getTemplateContents)
    .then(compileTemplateWithData.bind(null, data))
    .then(sendCompiledTemplate.bind(response))
}
const app = express();
app.use(bodyParser.json());
app.use(logger('combined'));
app.post('/compile', compile);
app.listen(process.env.PORT || 8080, 'localhost', () => {
  console.log('Server started');
});
