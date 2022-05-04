const nestedDirectories = require('./nestedDirectories');

const dirs = [
  'routes/files',
  'routes/files/emptyfolder',
  'routes/files/somefolder',
  'routes/files/test.docx',
  'routes/randomdata.json',
  'routes/files/somefolder/example.docx'
];

const data = nestedDirectories(dirs).exec();
console.log(JSON.stringify(data, null, 2));

