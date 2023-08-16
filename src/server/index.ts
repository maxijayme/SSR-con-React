import express, {Express, Request, Response} from 'express';
import { config } from '../server/config'
import { template } from './render/template';
const app: Express = express();

app.get('*',(req: Request, res: Response)=>{
    res.send(template(`<h1>Render h1 from server</h1>`))
})

app.listen(config.PORT, ()=> console.log(`Listing port ${config.PORT}`))