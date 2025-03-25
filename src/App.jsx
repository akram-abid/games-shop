import './App.css'
import MainBackground from "./components/MainBackground"
import IntroMain from './components/IntroMain';

function App() {
  console.log("retrive the try ", JSON.parse(localStorage.getItem("cart3")))
  return (
    <>
      <MainBackground url={"/videos/cyberpunk-skull-soldier-wallpaperwaifu-com.mp4"}/>
      <IntroMain  />
    </>
  );
}

export default App
