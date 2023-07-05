import React from "react";
import PersonList from "./PersonList";
import { PersonService } from "./PersonsProvider";

function App() {
  const samplePersons = PersonService.getSamplePersons();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <PersonList persons={samplePersons} />
        </p>
        <button onClick={() => PersonService.eraseAllData()}>
          Reset all persons
        </button>
      </header>
    </div>
  );
}

export default App;
