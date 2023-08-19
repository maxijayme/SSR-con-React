import express, {Express, Request, Response} from 'express';
import { config } from '../server/config'
import { render } from './render';

const app: Express = express();
app.use(express.static('dist'))

app.get('/galaxias', async (req:Request, res: Response)=>{
    try{
        const apiRes = await fetch("https://images-api.nasa.gov/search?q=galaxies")
        const data = await apiRes.json()
        const initialProps = {
            galaxies: data?.collection?.items
        }
        res.send(render(req.url, initialProps))
    }catch(error){
        throw new Error ("fetching galaxies error", error)
    }
})

app.get('*',(req: Request, res: Response)=>{
    res.send(render(req.url))
})

app.listen(config.PORT, ()=> console.log(`Listing port ${config.PORT}`))