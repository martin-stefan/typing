import './App.scss';

import Main from './containers/main';

function App() {

  function handleKeyPress(e) {
    console.log('pressed');
    if (e.key === "h") {
      console.log('correct');
    }
  }
  return (
    <div className="App" onKeyPress={handleKeyPress}>
      <Main />
    </div>
  );
}

export default App;
