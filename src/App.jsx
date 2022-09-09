import "./App.css";
import CharacterList from "./components/CharacterList";
import LightningAnimation from "./components/LightningAnimation";
import titleImg from "./assets/img/title.svg";
import AnimationTools from "./components/AnimationTools";
import CanvasAnimation from './components/CanvasAnimation'
import InstructionWindow from './components/InstructionWindow'

function App() {
  return (
    <>
      <InstructionWindow/>
      <CanvasAnimation/>
      <AnimationTools />
      <main className="page-container">
        <LightningAnimation />
        <img
          className="title-img title-img-animation"
          id="titleImg"
          src={titleImg}
          alt="Rick And Morty Title"
          onDragStart={e => e.preventDefault()}
        />
        <CharacterList id='characterList'/>
      </main>
    </>
  );
}

export default App;
