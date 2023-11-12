// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let planet = pickPlanet(listedPlanets);
        console.log(planet);
       let target = document.getElementById("missionTarget");
       target.innerHTML = addDestinationInfo(planet);
        //addDestinationInfo(Document,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
        
      /*  let form = document.querySelector('form');
        form.addEventListener('submit', event => 
        {
            let planet = pickPlanet(listedPlanets);
            console.log(planet);
            addDestinationInfo(planet,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
        });
        */
        /*
        let form = document.querySelector('form');
        form.addEventListener('submit', event => 
        {
            let pilotName = document.querySelector(input[name = pilotName]);
            let copilotName = document.querySelector(input[name = copilotName]);
            let fuelLevel = document.querySelector(input[name = fuelLevel]);
            let cargoMass = document.querySelector(input[name = cargoMass]);

            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") 
            {
                alert("All fields required.");
                event.preventDefault();
            }

            
        }); */
    
    })

});