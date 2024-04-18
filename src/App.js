import { useState } from 'react';
import './App.css';
import Color from './Color';
import TextArea from './TextArea';


function App() {
    const [colorText, setColor] = useState('')
    const [hex, setHex] = useState('')
    const [dark, setDark] = useState('')
    return (
      <div className="App">
      <TextArea
      colorText={colorText}
      hex={hex}
      dark={dark}
      />
      <Color
       colorText={colorText}
       setColor={setColor}
       setHex={setHex}
       dark={dark}
       setDark={setDark} />
    </div>
    );}



export default App;