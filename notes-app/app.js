const fs = require('fs');

const filePath = 'notes-app.txt';
fs.writeFileSync(filePath, 'This file was created by Node.js');

fs.appendFileSync(filePath, ' Appended text');