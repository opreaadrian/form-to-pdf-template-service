import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import Template from './models/template';
const logger = require('morgan');

const getTemplateContents = (result) => {
  return result.get('templateContent');
};

const compileTemplateWithData = (data, template) => {
  console.log(template, data);
  return ejs.render(template, data);
};

const sendCompiledTemplate = (response, template) => {
  response.json({ template });
};

const compile = (request, response) => {
  const { templateId, data } = request.body;
  Template.findOne({})
    .then(getTemplateContents)
    .then(compileTemplateWithData.bind(null, data))
    .then(sendCompiledTemplate.bind(null, response));
};

const app = express();
app.use(bodyParser.json());
app.use(logger('combined'));
app.post('/compile', compile);
app.listen(process.env.PORT || 8080, 'localhost', () => {
  console.log(`Server started on localhost:8080`);
});
