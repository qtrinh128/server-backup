const mv = require('mv');
const fsExtra = require('fs-extra');

const err = fsExtra.removeSync('../../server/assets/client/js');

if (err) {
    console.log('Remove server/assets/client/js folder error', err);
    return;
  }
  console.log('Remove server/assets/client/js folder done');

mv('dist', '../../server/assets/client/js', {mkdirp: true}, function(errMove) {
  if(errMove) {
    console.log('Move js file has error ', errMove);
    return;
  }
  console.log('Move js build file done');
});
