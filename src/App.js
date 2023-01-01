import './App.css';
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";

function App() {
  return (
    <main>
      <NavBar />
      <ItemList 
        description="Show your skills with the Qatar 2022 World Cup Official Match Ball"
        />
    </main>
  );
}

export default App;
