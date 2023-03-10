import {BsFillCarFrontFill} from 'react-icons/bs'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <h1>React Tutorial</h1>
      <h3>Creating my first react app</h3>
      <h2>My Friend loves car <BsFillCarFrontFill></BsFillCarFrontFill></h2>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
