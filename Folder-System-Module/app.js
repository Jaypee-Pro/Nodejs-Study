
/*
  problem 1: create a folder and file then read .
  Answer;
  flow : create a folder -> create a file -> read a file .
  
  problem 2: delete a folder with existing file.
  Answer;
  flow : read the file -> unlink the file first -> remove the folder 2nd
*/


//fs = file system
const fs = require('fs');
//mkdir('folder name', callback)
fs.mkdir('New-Folder',(err)=>{
  if(err)
    console.log(err);
  else
    console.log(`Successfully created Folder`);
    //if error is already exists delete the folder then rerun this
    //rmdir = remove folder
   /* fs.rmdir('New-Folder',(err)=>{
      if(err)
        console.log(err)
      else
        console.log('Successfully Deleted!')
    });*/
    
    //create a file after creating a Folder
    fs.writeFile('./New-Folder/newfile.txt','new file created',(err)=>{
      if(err)
        console.log(err)
      else
        console.log('File successfully created!')
        fs.readFile('./New-Folder/newfile.txt','utf8',(err,file)=>{
          if(err)
            console.log(err)
          else
            console.log(file)
            //problem 2
            //deleting file
            fs.unlink('./New-Folder/newfile.txt',(err)=>{
              if(err)
                console.log
              else
                console.log('File successfully deleted!')
               //deleting folder
                fs.rmdir('./New-Folder',(err)=>{
                  if(err)
                    console.log(err)
                  else
                    console.log('Folder successfully deleted!')
                    //read directories
                    fs.readdir('../../NodeProject',(err, files)=>{
                      if(err)
                        console.log(err)
                      else
                        console.log(`present file :\n`)
                        console.log(files)
                    })
                })
            })
        })
    })
});

