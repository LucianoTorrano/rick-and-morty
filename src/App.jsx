import CharacterList from './components/CharacterList'
import PageBtnDisplay from './components/PageBtnDisplay'
import titleImg from './assets/img/title.svg'
import './App.css'

function App() {
  return (
    <main className = "page-container">
      <img className='title-img' src={titleImg} alt="Rick And Morty Title" />
      <PageBtnDisplay/>
      <CharacterList/>
      <PageBtnDisplay/>
    </main>
  );
}

export default App;
