import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';

const PORT = process.env.PORT ? +process.env.PORT : 4000;

const app = express();
const server = createServer(app);

if (process.env.NODE_ENV === 'development') app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'production') app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/api/user', (req, res) => {
  const { body: { userEmail, password } } = req;

  res.json({ result: true, data: {
    userEmail,
    password,
    nickname: 'qweqwe',
    name: '홍길동'
  }});
});

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`> http://localhost:${PORT}`);
});