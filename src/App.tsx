import logo from './logo.svg';
import './App.css';
import ChampionScrollBar from './components/championScrollBar/championScrollBar';
import { ChampionView } from './components/championView/championView';

function App() {
  return (

    <div className="App">
      <ChampionScrollBar></ChampionScrollBar>
      <header className="App-header">
        <ChampionView></ChampionView>
      </header>
    </div>
  );
}

export default App;
