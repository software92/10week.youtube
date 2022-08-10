import express from 'express';
import morgan from 'morgan';

const app = express();

const PORT = 4000;

app.use(morgan('tiny'));
app.get('/', (req, res) => res.send('home'));

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);
