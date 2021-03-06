import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Pops!' });
})

app.listen(3333, () => {
  console.log('Server staterd on port 3333!');
});
