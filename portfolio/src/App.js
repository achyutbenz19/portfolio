import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <Skills />
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;