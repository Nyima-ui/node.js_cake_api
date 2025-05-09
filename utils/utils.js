import fs from 'fs'; 



export const writeDataToFile = (filePath, content) => {
    const exportContent = `export default ${JSON.stringify(content, null, 2)}`
    fs.writeFileSync(filePath, exportContent, (err) => {
        if(err){
            console.log(err); 
        }
    })
}


export const getPostData = (req) => {
   return new Promise((resolve, reject) => {
    try{
      let body = ""; 

      req.on('data', (chunk) => {
        body += chunk.toString()
      });

      req.on('end', () => {
        resolve(body)
      })
    }catch(error){
      reject(err)
    }
   })
}