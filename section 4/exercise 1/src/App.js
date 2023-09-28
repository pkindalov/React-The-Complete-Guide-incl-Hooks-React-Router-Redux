import Header from "./components/Header/Header";
import ConceptItem from "./components/Concepts/ConceptItem";
import ConceptList from "./components/Concepts/ConceptList";
import { concepts } from "./data/Data";

function App() {
  return (
    <div>
      <Header />
      <ConceptList id="concepts">
        {concepts.map((item, index) => (
          <ConceptItem
            key={index}
            id={index}
            image={item.image}
            title={item.title}
            description={item.description}
            nameOfClass={"concept"}
          />
        ))}
      </ConceptList>
    </div>
  );
}

export default App;
