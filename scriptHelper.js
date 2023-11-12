// Write your helper functions here!



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    return(
        `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: {name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
        `
    )
 }
 addDestinationInfo(Document(), "hi");
 function validateInput(testInput) {
    if(typeof(testInput) === String)
    {
        if(testInput === '')
        {
            return "Empty";
        }
        return "String";
    }
    if(typeof(Number(testInput)) === Number)
    {
        return "Is a Number";
    }
    else if(isNaN(Number(testInput)))
    {
        return "Not a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if(validateInput(pilot) === "String")
    {
        document.getElementById('pilotStatus').innerHTML = `${pilot} is Ready`;
    }
    else if(validateInput(pilot) === "Empty")
    {
        document.getElementById('pilotStatus').innerHTML = "";
    }

    if(validateInput(pilot) === "String")
    {
        document.getElementById('copilotStatus').innerHTML = `${copilot} is Ready`;
    }
    else if(validateInput(pilot) === "Empty")
    {

        document.getElementById('copilotStatus').innerHTML = "";
    }

    if(validateInput(fuelLevel) === "Is a Number")
    {
        if(fuelLevel < 10000)
        {
            document.getElementById('faultyItems').style.visability = visable;
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
            document.getElementById('launchStatus').style.color = red;
            document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch.";
        }
    }

    if (cargoLevel > 10000)
    {
        list.style.visability = visable;
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