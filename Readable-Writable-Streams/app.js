const fs = require('fs')/*
//read the data the best way
//stream is for big data loaded
const readStream = fs.createReadStream('./test.txt','utf8')
const writeStream = fs.createWriteStream('writeStream.txt')
readStream.on('data',(chunk)=>{
  console.log(chunk)
  writeStream.write(chunk)
})




//pipe shortcut for sending copy of data to new file
const newWriteStream = fs.createWriteStream('pipe.txt')
readStream.pipe(newWriteStream)




//use for congressing file
const zlib = require('zlib');
//compressed the file into zipped
const gzip = zlib.createGzip();
//compressed file
//chaning pipe
const gzipWriteFile = fs.createWriteStream('gzip.txt.gz')
readStream.pipe(gzip).pipe(gzipWriteFile)

*/


//uncompressing gzip file
const gzlib = require('zlib');
const gunzip = gzlib.createGunzip();
const uncompressing = fs.createReadStream('./gzip.txt.gz');
const destination = fs.createWriteStream('uncompressed.txt');
uncompressing.pipe(gunzip).pipe(destination)