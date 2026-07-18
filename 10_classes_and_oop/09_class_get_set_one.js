class Person {
  constructor(name) {
    this._name = name; // The "internal" storage property. 
  }

  // Getter
  get name() { // will run whenever someone will try to get name of an instance
    console.log("Someone is reading the name...");
    return this._name.toUpperCase();
  }

  // Setter
  set name(newName) { // will run when someone will try to set name of an instance
    if (newName.length < 2) {
      console.log("Error: Name is too short!");
      return;
    }
    console.log("Setting the name to:", newName);
    this._name = newName;
  }
}
const rehan = new Person ("rehu") // here no get or set is being run, only the constructor is getting executed here.
console.log(rehan.name) // here get method gets executed
rehan.name = 'rehuuuuuuuuuuuu' // here the set method gets executed.
 // note-> with methods generally, we have to write () after the name of the method in order to execute the, but these get and set methods are special methods which act like a property.
 