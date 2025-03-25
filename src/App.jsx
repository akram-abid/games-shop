import './App.css';
import MainBackground from "./components/MainBackground";
import IntroMain from './components/IntroMain';

function App() {
  // Check if "cart3" exists in localStorage; if not, initialize it with an empty array
  if (!localStorage.getItem("cart3")) {
    localStorage.setItem("cart3", JSON.stringify([]));
  }

  console.log("retrieve the try ", JSON.parse(localStorage.getItem("cart3")));

  return (
    <>
      <MainBackground url={"/videos/cyberpunk-skull-soldier-wallpaperwaifu-com.mp4"} />
      <IntroMain />
    </>
  );
}

export default App;
