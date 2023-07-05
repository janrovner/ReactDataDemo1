import React from "react";
import { Person } from "./PersonsProvider";

interface PersonListProps {
  persons: Person[];
}

const PersonList: React.FC<PersonListProps> = ({ persons }) => {
  const handleButtonClick = (p: Person) => {
    window.alert(p.getId());
  };

  const personListItems = [];

  for (let pIndex = 0; pIndex < persons.length; pIndex++) {
    const person = persons[pIndex];

    const listItem = (
      <li key={person.id} className="dynamic">
        <a href="#" onClick={() => handleButtonClick(person)}>
          {person.name}
        </a>
      </li>
    );

    personListItems.push(listItem);
  }

  // Render the personListItems array
  return (
    <div>
      <h2>Person List</h2>
      <ul>{personListItems}</ul>
    </div>
  );
};

export default PersonList;
