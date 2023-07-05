export interface Person {
  id: number;
  name: string;
  getId(): string;
}

export class PersonImpl implements Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return "getting id " + this.id.toString();
  }
}

export class PersonService {
  static person1: PersonImpl | null = new PersonImpl(1, "John");
  static person2: PersonImpl | null = new PersonImpl(2, "Alice");
  static person3: PersonImpl | null = new PersonImpl(3, "Bob");

  static persons: Person[] | null = [
    PersonService.person1!,
    PersonService.person2!,
    PersonService.person3!
  ];

  static getSamplePersons(): Person[] {
    return PersonService.persons!;
  }

  static eraseAllData() {
    window.alert("eraseAllData");
    PersonService.person1 = null;
    PersonService.person2 = null;
    PersonService.person3 = null;
    PersonService.persons = null;
  }
}
