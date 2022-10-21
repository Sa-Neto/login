import app from './index';
import './database/config';

const PORT = process.env.PORT

app.listen(PORT,() => {
  console.log('Aplicação rodando na port: ' + PORT)
})