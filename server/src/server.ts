import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'; 

import { Drink, menu, orders } from './models/drink.model';

const app = express(); 

// CORS 
app.use(cors({credentials: true, origin: true}));
// app.options('*', cors({credentials: true, origin: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(express.json()); //New Body Parser
app.use(express.urlencoded({extended:false})); // Also parse HTML Forms
app.use(cookieParser()); //Cookie parser

app.get('/menu', (req, res, next) => {
  res.status(200).send(menu);
});  

app.get('/orders', (req, res, next) => {
  res.status(200).send(orders);
});  

app.get('/orders/:id', (req, res, next) => {
  let order = orders[parseInt(req.params.id)];
  res.status(200).send(order);
});  

app.post('/orders', (req, res, next) => {
  let obj = req.body;
  let tmp: any[] = []; 
  
  obj.forEach((element: any) => {
    tmp.push(element); 
  });

  orders.push(tmp); 
  
  res.status(200).send(orders);
});  

app.delete('/orders/:id', (req, res, next) => {
  let index = parseInt(req.params.id);
  console.log(index); 
  orders.splice(index, 1);
  res.status(204).send('');
});  

app.listen(3000);