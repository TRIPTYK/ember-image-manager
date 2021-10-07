const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const filesFolder = './server/files';
app.use(cors());
app.use(express.static(filesFolder));
app.get('/api/v1/files', async (req, res) => {
  res.json({ files: (await dirTree(filesFolder)).children });
});

app.post('api/v1/files', async (req, res) => {
  console.log('post files to server');
});

app.listen(3000, () => {
  console.log('Api running');
});

/**
 * Utils
 */
const dirTree = async (filename) => {
  let stats = await fs.lstat(filename);
  let info = {
    absolutePath: path.resolve(filename),
    url: filename.replace(filesFolder, 'http://localhost:3000'),
    size: stats.size,
    modifiedAt: stats.mtime,
    name: path.basename(filename),
  };
  if (stats.isDirectory()) {
    info.type = 'folder';
    let items = await fs.readdir(filename);
    info.children = await Promise.all(
      items.map(async (child) => await dirTree(filename + '/' + child))
    );
  } else {
    info.type = 'file';
  }
  return info;
};
