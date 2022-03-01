import AddItemComponent from "./components/AddItemComponent";
import ListComponent from "./components/ListComponent";
import "./styles/style.css";
import ItemsContext from "./contexts/ItemsContext";

function App() {
  return (
    <div className="container px-1">
      <ItemsContext>
        <AddItemComponent />
        <ListComponent />
      </ItemsContext>
    </div>
  );
}

export default App;
