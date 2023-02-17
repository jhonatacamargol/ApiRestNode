import app from './src/app.js'
import conection from './infra/conection.js';

const PORT = 3001
conection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("conecção realizada com sucesso")
    
     app.listen(PORT, () => {
    console.log('exemplo de porta funcionando corretamente http://localhost'+ PORT)
    });
   }
});

