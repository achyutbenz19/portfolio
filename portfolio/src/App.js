import Navbar from './Navbar';
import Home
 from './Home';
function App() {

  const title = "Welcome to Achyut's Page"
  const contact = "(+1) 999-999-9999"
  const link = "https://www.youtube.com"
  return (
    <div classname="App">
        <Navbar />
        <div classname="Content">
            <h1>{title}</h1>
            <p>Contact me at {contact}</p>
            <p>{"Random number : "}{Math.random()*100}</p>
            <a href={link}>Click me!</a>
        </div>
        <Home />
    </div>
  );
}

export default App; 
