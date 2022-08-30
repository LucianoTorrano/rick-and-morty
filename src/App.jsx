import CharacterList from './components/CharacterList'
import PageBtnDisplay from './components/PageBtnDisplay'
import LightningAnimation from './components/LightningAnimation'
import titleImg from './assets/img/title.svg'
import './App.css'

function App() {
  return (
    <main className = "page-container">
      <LightningAnimation/>
      <img className='title-img' src={titleImg} alt="Rick And Morty Title" />
      <PageBtnDisplay/>
      <CharacterList/>
      <PageBtnDisplay/>
    </main>
  );
}

export default App;
