const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,
    roles: [
      { name: "Manager", method: "get" },
      { name: "Client", method: "post" },
      { name: "User", method: "get" },
    ],
   
    address: {
      address: {
        street: "3914 Woodruff Ave",
        location: "Oakland, CA 94602Glenview",
      },
      position: {
        lat: 123.221,
        lng: 124.544,
      },
    },
   };
   //const addIdUser = (person, id) => {
   //return { ...person, id };
   // };
   
   const addIdUser = {  ...person, id:1};
  
   //const showPersonalInformation = (person) => {
    //let information = "";
    //information += "Nombres: " + person.name + "\n";
    //information += "Apellidos:" + person.lastname + "\n";
    //information += "Edad:" + person.age;
    //return information;
   //};
   const {name, lastname, age} = person;

   const showRoles = (person) => {
    let information = "";
    for (let i = 0; i < person.roles.length; i++) {
      information += "Nombre del rol " + person.roles[i].name + "\n";
      information += "Tipo del rol " + person.roles[i].method + "\n";
    }
     return information;
   
  }; 
 
   
 const getPosition = (person) => {
    return person.address.position;
   };
   const getFirstRol = (person) => {
    return person.roles[0];
   };
   const getAddress = (person) => {
    let information = "";
    information += "Calle: " + person.address.address.street + "\n";
    information += "Localizacion:" + person.address.address.location + "\n";
    return information;
    };
    
    person.roles.push({name: "User" , method: "get"});
    

   const main = () => {
    //console.log(addIdUser(person, 123456));
    console.log(addIdUser);
    console.log(" Nombres: " +name + "\n","Apellidos: " +lastname +"\n","Edad: " +age);
    //console.log(showPersonalInformation(person));
    console.log(showRoles(person));
    console.log(getPosition(person));
    console.log(getFirstRol(person));
    console.log(getAddress(person));
   };
   export default main;
   