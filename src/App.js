
import './App.scss';
import Brand from './components/brand/brand';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Services from './components/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brand/>
      <Services/>
    </div>
  );
}

export default App;
