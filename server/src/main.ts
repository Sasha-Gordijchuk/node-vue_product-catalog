/* eslint-disable no-console */
import { createServer } from './server.js';

const PORT = process.env.PORT || 8080;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
