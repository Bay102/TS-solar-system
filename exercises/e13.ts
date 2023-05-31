// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { Data, Planet } from "../data/data"

export function getAveragePlanetsTemperature(data: Data) {
   const allTemps = data.planets.map((planet: Planet) => planet.avgTemp)
   return allTemps.reduce((acc: number, val: number) => {
      return acc += val / data.planets.length
   },0)
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
