
import './App.scss';
import Brand from './components/brand/brand';
import Header from './components/header/header';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brand/>
    </div>
  );
}

export default App;
