// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets

import { Planet } from "../data/data";

type Data = {
   planets: Planet[]
}

// Return example: 42
export  const allPlanetsMoonsCount = (data: Data) => {
   let moons = 0;
     data.planets.forEach((planet: Planet) => {
        if (planet.moons) {
           moons += planet.moons.length
        }
     })
     return moons
  };

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
