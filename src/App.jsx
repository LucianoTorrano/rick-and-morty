import CharacterList from "./components/CharacterList";
import LightningAnimation from "./components/LightningAnimation";
import titleImg from "./assets/img/title.svg";
import AnimationTools from "./components/AnimationTools";
import "./App.css";

function App() {
  return (
    <>
      <AnimationTools />
      <main className="page-container">
        <LightningAnimation />
        <img
          className="title-img title-img-animation"
          id="titleImg"
          src={titleImg}
          alt="Rick And Morty Title"
        />
        <CharacterList id='characterList'/>
      </main>
    </>
  );
}

export default App;
