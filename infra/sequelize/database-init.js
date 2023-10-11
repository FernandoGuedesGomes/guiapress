const fs = require('fs');
const connection = require('../../database/database');
const dataDir = `${__dirname}/data/`;

fs.readdir(dataDir, async (error, files) => {
  if (error) throw error;
  for(const file of files) {
    const query = fs.readFileSync(`${dataDir}${file}`, { encoding: 'utf8' });
    await connection.query(query, { raw: true })
      .then(res => console.log(file + ' was executed!'))
      .catch(error => console.log(error));
  }
});