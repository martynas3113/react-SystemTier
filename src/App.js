
import './App.scss';
import Brand from './components/brand/brand';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Industries from './components/industries/industries';
import Services from './components/services/services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Brand/>
      <Services/>
      <Industries/>
    </div>
  );
}

export default App;
