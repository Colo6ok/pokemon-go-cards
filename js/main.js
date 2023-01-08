
let elList = document.querySelector(".js__list")

elList.style.display = "flex"
elList.style.alignItems = "center"
elList.style.justifyContent = "center"
elList.style.flexWrap = "wrap"

for(let item of pokemons) {
    let isItem = document.createElement("li")
    let isId = document.createElement("p")
    let isNum = document.createElement("p")
    let isName = document.createElement("h3")
    let isImg = document.createElement("img")
    let isType = document.createElement("span")
    let isHeight = document.createElement("span")
    let isWeight = document.createElement("span")
    // let isCandy = document.createElement("p")
    // let isEgg = document.createElement("p")
    // let isSpawnChance = document.createElement("time")
    // let isAvgSpawn = document.createElement("time")
    // let isSpawnTime = document.createElement("time")
    // let isMultipliers = document.createElement("p")
    // let isWeaknesses = document.createElement("p")

    isType.style.display = "block"
    isName.style.color = "chocolate"
    isType.style.color = "red"
    isHeight.style.margin = "0 15px"

    isId.textContent = `##${item.id}`
    isNum.textContent = item.num
    isName.textContent = item.name
    isImg.src = item.img
    isType.textContent = item.type
    isHeight.textContent = item.height
    isWeight.textContent = item.weight
    // isCandy.textContent = item.candy
    // isEgg.textContent = item.egg
    // isSpawnChance.textContent = item.spawn_chance
    // isAvgSpawn.textContent = item.avg_spawns
    // isSpawnTime.textContent = item.spawn_time
    // isMultipliers.textContent = item.multipliers
    // isWeaknesses.textContent = item.weaknesses

    elList.appendChild(isItem)
    isItem.appendChild(isId)
    isItem.appendChild(isNum)
    isItem.appendChild(isName)
    isItem.appendChild(isImg)
    isItem.appendChild(isType)
    isItem.appendChild(isHeight)
    isItem.appendChild(isWeight)
    // isItem.appendChild(isCandy)
    // isItem.appendChild(isEgg)
    // isItem.appendChild(isSpawnChance)
    // isItem.appendChild(isAvgSpawn)
    // isItem.appendChild(isSpawnTime)
    // isItem.appendChild(isMultipliers)
    // isItem.appendChild(isWeaknesses)
}