// Write your helper functions here!


 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML =
        `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
        `

 }
 
 function validateInput(testInput) {

    
    if(isNaN(testInput))
    {
        return "Not a Number";
    }
    else
    {
        return "Is a Number";
    }
    if (testInput === '')
    {
        return "Empty"
    }
    }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    console.log(validateInput(pilot));
    console.log(validateInput(copilot));
    console.log(validateInput(fuelLevel));
   // console.log(fuelLevel);
    console.log(validateInput(cargoLevel));

    if(validateInput(pilot) !== "Not a Number" && validateInput(copilot) === "Not a Number")
    {
        alert("Please enter a string of characters for the pilots.");
        event.preventDefault();
    }

    if (validateInput(fuelLevel) !== "is a Number" && validateInput(cargoLevel) !== "is a Number")
    {
        alert("Please enter a number for fuel level and cargo mass.");
        event.preventDefault();
    }

    if(validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number")
    {
        document.getElementById('pilotStatus').innerHTML = `${pilot} is Ready`;
        document.getElementById('copilotStatus').innerHTML = `${copilot} is Ready`;
    }


    if (validateInput(fuelLevel) === "is a Number" && validateInput(cargoLevel) === "is a Number")
    {
        if(fuelLevel < 10000)
        {
            //.getElementById('faultyItems').style.visability = visible;
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
            document.getElementById('launchStatus').style.color = "red";
            document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch.";
        }

        if (cargoLevel > 10000)
        {
           // .style.visability = visible;
            document.getElementById('cargoStatus').innerHTML = "There is too much cargo mass for launch.";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
            document.getElementById('launchStatus').style.color = "red";
        }
    
        if (fuelLevel > 10000 && cargoLevel < 10000)
        {
            document.getElementById('launchStatus').innerHTML = "Shuttle ready for launch.";
            document.getElementById('launchStatus').style.color = "green";
        }
    }
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) 
     {
        return response.json();
     });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;