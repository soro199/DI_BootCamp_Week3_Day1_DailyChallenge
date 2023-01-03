
/*Daily Challenge*/



// 1) Create an array which value is the planets of the solar system.


const planet = ["Mercure","Vénus","Terre","Mars","Jupiter","Saturne","Uranus","Neptune","Pluton"]
const moons = ["moonsMercure","moonsVénus","moonsTerre","moonsMars","moonsJupiter","moonsSaturne","moonsUranus","moonsNeptune","moonsPluton"]

// 2) For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

for(let i of planet){
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(i)  // 3) Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

    for(let l of moons ){   /*Bonus: Do the same process to create the moons.
                                Be careful, each planet has a certain amount of moons. How should you display them?
                                Should you still use an array for the planets ? Or an array of objects ?*/

        const moonsDiv = document.createElement("div")
        moonsDiv.classList.add("moon")
        div.appendChild(moonsDiv)
        
    }
   
    const sec = document.querySelector(".listPlanets")

    sec?.appendChild(div)

}