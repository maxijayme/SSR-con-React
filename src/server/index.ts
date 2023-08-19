import express, {Express, Request, Response} from 'express';
import { config } from '../server/config'
import { render } from './render';
render

const app: Express = express();

app.use(express.static('dist'))

app.get('*',(req: Request, res: Response)=>{
    res.send(render(req.url))
})

app.listen(config.PORT, ()=> console.log(`Listing port ${config.PORT}`))