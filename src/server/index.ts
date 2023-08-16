import express, {Express, Request, Response} from 'express';
import { config } from '../server/config'
const app: Express = express();

app.get('*',(req: Request, res: Response)=>{
    res.send(`<h1>Estas en la ruta: ${req.url} </h1>`)
})

app.listen(config.PORT, ()=> console.log(`Listing port ${config.PORT}`))