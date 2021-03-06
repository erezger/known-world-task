import app from './app';
import * as dotenv from 'dotenv';

const PORT = 5000;

app.listen(PORT, () => {
  dotenv.config();
  console.log('Express server listening on port ' + PORT);
});
