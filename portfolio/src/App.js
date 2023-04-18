import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;