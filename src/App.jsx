import './App.css';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';
import Events from '../src/Components/Events/Events';
import Partnes from './Components/Partnes/Partnes';
import Workshop from '../src/Components/Workshop/Workshop';
import Speaker from '../src/Components/Speaker/Speaker';
import Timeline from '../src/Components/Timeline/Timeline';
import Footer from '../src/Components/Footer/Footer';

function App() {
  return (
    <>
    <div className='AppContainer'>
      <Header/>
      <Home/>
      <Events/>
      <Partnes/>
      <Workshop/>
      <Speaker/>
      <Timeline/>
      <Footer/>
    </div>
    </>
  )
}

export default App
