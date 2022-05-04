# Nested Directories

###How to use?

```js
const dirs = [
  'routes/files',
  'routes/files/emptyfolder',
  'routes/files/somefolder',
  'routes/files/test.docx',
  'routes/randomdata.json',
  'routes/files/somefolder/example.docx'
];

const data = nestedDirectories(dirs).exec();
```

Result:
```js
[
  {
    title: 'routes',
    content: [
      {
        title: 'files',
        content: [
          { title: 'emptyfolder', content: [] },
          {
            title: 'somefolder',
            content: [ { title: 'example.docx' } ]
          },
          { title: 'test.docx' }
        ]
      },
      { title: 'randomdata.json' }
    ]
  }
]
```
