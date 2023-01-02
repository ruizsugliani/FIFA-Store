import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return <>
      <NavBar />
      <ItemListContainer
        greeting="Welcome to our web app! We are actually delevoping a brand new FIFA Store, stay tuned!"
        />
    </>;
}

export default App;
