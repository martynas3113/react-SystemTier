
import './App.scss';
import Brand from './components/brand/brand';
import CaseStudies from './components/caseStudies/casestudies';
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
      <CaseStudies/>
    </div>
  );
}

export default App;
