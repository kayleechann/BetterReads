import path from 'path'
import {promises as fs} from 'fs'

export default async function handler(req, res){
    const {author} = req.query
    //get the path to the json directory
    const jsonDirectory = path.join(process.cwd())
    //read in the contentsfrom our json fille
    const fileContents = await fs.readFile(jsonDirectory +  '/json/data.json', 'utf8')
    const data = JSON.parse(fileContents).filter(d => d.author === author)
    //send all of the file's contents as jSOn to the client
    res.status(200).json(data)
}