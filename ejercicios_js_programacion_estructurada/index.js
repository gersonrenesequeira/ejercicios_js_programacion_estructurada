import app from './app.js';
import { PORT } from './app.js';

app.listenerCount(PORT)
console.log("SERVIDOR ejecutandose en el puerto",PORT);
