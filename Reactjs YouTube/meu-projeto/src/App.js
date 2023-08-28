import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld';
import SayMyName from './components/sayMyName';
import Pessoa from './components/Pessoa';


function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <SayMyName nome="Edwin"/>
      <SayMyName nome="Joao"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Edwin" idade="19" profissao="programador" />
    </div>
  );
}

export default App;
