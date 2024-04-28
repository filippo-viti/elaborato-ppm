import './App.css'
import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/MainArticle.tsx";

function App() {
  return (
    <div className={"content"}>
      <Header/>
      <HeroImage/>
      <MainArticle/>
    </div>
  )
}

export default App
