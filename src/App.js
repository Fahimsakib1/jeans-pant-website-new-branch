import './App.css';
import FifthPage from './components/FifthPage/FifthPage';
import Footer from './components/Footer/Footer';
import ForthPage from './components/ForthPage/ForthPage';
import LandingPage from './components/LandingPage/LandingPage';
import SecondPage from './components/SecondPage/SecondPage';
import SeventhPage from './components/SeventhPage/SeventhPage';
import SixthPage from './components/SixthPage/SixthPage';
import ThirdPage from './components/ThirdPage/ThirdPage';

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <ForthPage></ForthPage>
      <FifthPage></FifthPage>
      <SixthPage></SixthPage>
      <Footer></Footer>
      <SeventhPage></SeventhPage>
    </div>
  );
}

export default App;
