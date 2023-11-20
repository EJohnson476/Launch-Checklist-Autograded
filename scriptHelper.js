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

    if (testInput === '')
    {
        return "Empty"
    }
    if(isNaN(testInput))
    {
        return "Not a Number";
    }
    else
    {
        return "Is a Number";
    }
}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") 
    {
        alert("All fields required.");
        return;
    }

    if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number")
    {
        alert("Please enter a string for the pilots and numbers for the cargo/fuel.");
        return;
    }
        document.getElementById('faultyItems').style = "visibility: visible";
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if(Number(fuelLevel) < 10000)
        {
            document.getElementById('launchStatus').innerHTML = "Shuttle Not Ready for Launch.";
            document.getElementById('launchStatus').style.color = "red";
            document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch.";
        }
        else
        {
            document.getElementById('fuelStatus').innerHTML = "Fuel level high enough for launch";
        }

        if (Number(cargoLevel) > 10000)
        {
            document.getElementById('cargoStatus').innerHTML = "Cargo mass too heavy for launch.";
            document.getElementById('launchStatus').innerHTML = "Shuttle Not Ready for Launch.";
            document.getElementById('launchStatus').style.color = "red";
        }
        else
        {
            document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch"
        }
    
        if (fuelLevel >= 10000 && cargoLevel <= 10000)
        {
            document.getElementById('launchStatus').innerHTML = "Shuttle is Ready for Launch";
            document.getElementById('launchStatus').style.color = "green";
        }
    }
 
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