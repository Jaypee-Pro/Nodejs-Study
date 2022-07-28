//read dirextory and loop each file then add newfolder to each file

const fs = require('fs');
//read the NodeProject directories
fs.readdir('../../NodeProject',(err,files)=>{
  if(err)
    console.log(err)
  else
    console.log(files);
    //loop each file
    for(let file of files){
      //create folder each files
      fs.mkdir(`../../NodeProject/${file}/New-Folder`,(err)=>{
        if(err)
          console.log(err)
        else
          console.log('New Folder Successfully created!');
      })
      //read list of files inside
      fs.readdir(`../../NodeProject/${file}`,(err,files)=>{
        if(err)
          console.log(err)
        else
          console.log(file)
          console.log(files)
      })
    }
      
});