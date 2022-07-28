
//use fs and create a file.txt
let fs = require('fs');
/*writeFile(
    'name of file.txt',
    'message text',
    callback
)*/
fs.writeFile('test.txt','hello this is a message',(err)=>{
     if(err)
        console.log(err);
     else
        console.log('file successfully created!');
        //read file.txt
        /*
        readFile('name.txt','encoding type',callback)
        */
        fs.readFile('test.txt','utf8',(err,file)=>{
          if(err)
            console.log(err);
          else
            console.log(file)
        });
        
        //rename a file
        fs.rename('test.txt','test2.txt',(err)=>{
          if(err)
            console.log(err);
          else
            console.log('Successfully renamed the file!');
        });
        //append a file or add some text
        fs.appendFile('test2.txt','\nthis is appended text',(err)=>{
          if(err)
            console.log(err);
          else
            console.log('Successfully Appended file');
        })
        
        //deleted the file
        fs.unlink('test2.txt',(err)=>{
          if(err)
            console.log(err);
          else
            console.log('Successfully deleted!');
        });
});