import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Partners from "./components/Partners/Partners";
import Workshop from "./components/Workshop/Workshop";
import Speaker from "./components/Speaker/Speaker";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="AppContainer">
      <Header />
      <Home />
      <Events />
      <Partners />
      <Workshop />
      <Speaker />
      <Timeline />
      <Footer />
    </main>
  )
}

export default App