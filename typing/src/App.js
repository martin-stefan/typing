import './App.scss';
import Example from './components/example';
import Input from './components/input';

function App() {

  function handleKeyPress(e) {
    console.log('pressed');
    // if (e.key === "h") {
    //   console.log('correct');
    // }
  }
  return (
    <div className="App" onKeyPress={handleKeyPress}>
      <Example />
      <Input />
    </div>
  );
}

export default App;
