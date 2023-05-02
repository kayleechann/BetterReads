import path from 'path'
import {promises as fs} from 'fs'

export default async function handler(req, res){
    //get the path to the json directory
    const jsonDirectory = path.join(process.cwd())
    //read in the contentsfrom our json fille
    const fileContents = await fs.readFile(jsonDirectory +  '/json/data.json', 'utf8')
    const data = JSON.parse(fileContents)
    const allAuthors = []
    for (let author of data){
        if (author) {
            let key = Object.keys(author)[0]; // get the first key from the dictionary
            let value = author[key]; // get the value corresponding to the key
            allAuthors.push([value]); // append the key-value pair to the result array
          }
    }  
    //send all of the file's contents as jSOn to the client
    res.status(200).json(allAuthors)
}