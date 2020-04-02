import React from 'react';

import './global.css';

import Routes from './routes';
//Jsx html integrado no javascript 

function App() {
 // const [counter, setCounter] = useState(0);

  // Array [valor, funcaoDeAtualizacao]
  
 /* function increment() { 
      setCounter(counter + 1)
      //counter += 1;
      console.log(counter);
    }
 */
  return (
    //EXEMPLO
    // <Header title="Semana Omnistack" />
    //propriedade automatica
    // <Header>
    //   Semana Omnistack
    // </Header> 
    /* <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment} >Incrementar</button>
    </div> */
    <Routes />
  );
}

export default App;
