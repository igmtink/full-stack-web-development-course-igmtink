// ! Calling File System Module
const fs = require("fs");

// !Copying all content in (file1) and pass into (file2), and make another (file2) if doesn't exist
// If the (file2) have already content, it will replace the content from (file1)
fs.copyFileSync("./file1.txt", "./file2.txt");
