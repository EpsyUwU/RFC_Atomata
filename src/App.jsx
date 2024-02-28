import { useState } from 'react';
import Circle from './assets/Circle';
import Arrow from './assets/Arrow';
import StartCircle from './assets/StartCircle';
import EndCircle from './assets/EndCircle';

const App = () => {
  const [inputText1, setInputText1] = useState('');
  const [isValid1, setIsValid1] = useState(false);
  const rfc = 'ripc';

  const onChange1 = (event) => {
    let input = event.target.value.toLowerCase();
    setInputText1(input);

    if (rfc.startsWith(input)) {
      setIsValid1(true);
    } else {
      setIsValid1(false);
    }
  };

  const getColor = (index) => {
    if (inputText1.length >= index && isValid1) {
      return 'green';
    } else if (inputText1.length >= index) {
      return 'red';
    } else {
      return 'gray';
    }
  };

  const [inputText2, setInputText2] = useState('');
  const [isValid2, setIsValid2] = useState(false);

  const onChange2 = (event) => {
  let input = event.target.value.toLowerCase();
  setInputText2(input);

  // Comprobar si la primera letra es 'r' y las siguientes tres letras son cualquier combinación de 'i', 'p', 'c'
  let isValid = input.charAt(0) === 'r';
  for (let i = 1; i < 4; i++) {
    if (!rfc.includes(input.charAt(i))) {
      isValid = false;
      break;
    }
  }

  setIsValid2(isValid);
};

const getColor2 = (index) => {
  if (inputText2.length >= index && isValid2) {
    return 'green';
  } else if (inputText2.length >= index) {
    return 'red';
  } else {
    return 'gray';
  }
};

  return (
    <div>
      <input className="mx-auto block border-2 border-black" type="text" value={inputText1} onChange={onChange1} placeholder="Expresion 1" />
      <div className="mx-auto text-center mt-4">
        {isValid1 ? 'Cadena válida' : 'Cadena no válida'}
      </div>
      <div className="flex justify-center items-center h-screen">
        <StartCircle text="q0" color="gray"/>
        <Arrow text='R'/>
        <Circle text="q1" topText="End" color={getColor(1)}/>
        <Arrow text='I'/>
        <Circle text="q2" topText="End" color={getColor(2)}/>
        <Arrow text='P'/>
        <Circle text="q3" topText="End" color={getColor(3)}/>
        <Arrow text='C'/>
        <EndCircle text="q4" color={getColor(4)}/>
      </div>
      <input className="mx-auto block border-2 border-black" type="text" value={inputText2} onChange={onChange2} placeholder="Expresion 2"/>
      <div className="mx-auto text-center mt-4">
        {isValid1 ? 'Cadena válida' : 'Cadena no válida'}
      </div>
      <div className="flex justify-center items-center h-screen">
        <StartCircle text="q0" color="gray"/>
        <Arrow text='R'/>
        <Circle text="q1" color={getColor2(1)}/>
        <Arrow text='IPC'/>
        <Circle text="q2" color={getColor2(2)}/>
        <Arrow text='IPC'/>
        <Circle text="q3" color={getColor2(3)}/>
        <Arrow text='IPC'/>
        <EndCircle text="q4" color={getColor2(4)}/>
      </div>
    </div>
  );
};

export default App;
