import express,{Request, Response} from 'express'

const app = express()

app.get('/ads', (request:Request, response:Response)=>{
    return response.json([
        {id:1, name: 'anuncio1'},
        {id:2, name: 'anuncio2'},
        {id:3, name: 'anuncio3'},
        {id:4, name: 'anuncio4'},
    ])
})

app.listen(3333)