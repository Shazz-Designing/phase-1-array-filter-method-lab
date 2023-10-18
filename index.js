// Function to filter and return drivers with matching names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to filter and return drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to filter and return driver objects with a matching name
  function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Example data and usage:
  const drivers = [
    "John Smith",
    "Alice Johnson",
    "Bob Brown",
    "Cathy Carson",
    "David Doe",
  ];
  
  const driverObjects = [
    { name: "John Smith", hometown: "New York" },
    { name: "Alice Johnson", hometown: "Los Angeles" },
    { name: "Bob Brown", hometown: "Chicago" },
    { name: "Cathy Carson", hometown: "San Francisco" },
    { name: "David Doe", hometown: "Boston" },
  ];
  
  const matchingDrivers = findMatching(drivers, "alice johnson");
  console.log(matchingDrivers);
  
  const startingWithB = fuzzyMatch(drivers, "b");
  console.log(startingWithB);
  
  const nameMatch = matchName(driverObjects, "Bob Brown");
  console.log(nameMatch);
  
