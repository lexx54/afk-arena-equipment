// const header = document.querySelector("#title");
// const section = document.querySelector("#heroes");

// const request = new XMLHttpRequest();
// request.open(
//   "get",
//   "http://www.json-generator.com/api/json/get/cfYcqtZwRK?indent=2"
// );
// request.responseType = "json";
// request.send();

// request.onload = () => {
//   const info = request.response;
//   console.log(info);
//   createTitle();
//   createCard(info);
// };

// function createTitle() {
//   const title = document.createElement("h1");
//   title.textContent = "AFK Heroes Priority";
//   header.appendChild(title);
// }

export function createCard(json,section) {
if (!json){
  const message=document.createElement("p");
  message.textContent="You haven't keep trace of any equipment";
  message.classList.add("message-alert");
  section.appendChild(message);
  // setTimeout(eraseMessage(section),3000)
  eraseMessage(section);

}else {
  for (let i = 0; i < json.length; i++) {
    const container = document.createElement("article");
    const titleName = document.createElement("h2");
    const faction = document.createElement("p");
    const need = document.createElement("p");
    const eleNeed = document.createElement("ul");

    container.classList.add("hero-card");
    titleName.textContent = json[i].name.to;
    faction.textContent = json[i]['heroFaction'];
    need.textContent = "needs to max power: ";

    const hat = json[i].hat;
    for (let ele in hat) console.log(ele)

    for (let ele in hat) {
      // if (hat[ele] === hat.mythic)
      //   mythicCheck(hat[ele], eleNeed, json[i].faction, jsonKeys[5]);
      if (hat[ele] === hat.star)
        starCheck(hat[ele], eleNeed, "Hat");
      if (hat[ele] === hat.faction)
        factionCheck(hat[ele], eleNeed, json[i]["heroFaction"], "Hat");
      if (hat[ele] == hat.level)
        levelCheck(hat[ele], eleNeed, "Hat");
    }

    const weapon = json[i].weapon;
    // for (let ele in weapon) console.log(ele)
    for (let ele in weapon) {
      // if (weapon[ele] === weapon.mythic)
      //   mythicCheck(weapon[ele], eleNeed, json[i].faction, jsonKeys[2]);
      if (weapon[ele] === weapon.star){
        console.log(weapon[ele])
        starCheck(weapon[ele], eleNeed, "Weapon");}
      if (weapon[ele] === weapon.faction)
        factionCheck(weapon[ele], eleNeed, json[i]["heroFaction"], "Weapon");
      if (weapon[ele] == weapon.level)
        levelCheck(weapon[ele], eleNeed, "Weapon"); 
    }

    const boots = json[i].boots;
    for (let ele in boots) {
      // if (boots[ele] === boots.mythic)
      //   mythicCheck(boots[ele], eleNeed, json[i].faction, jsonKeys[3]);
      if (boots[ele] == boots.level)
        levelCheck(boots[ele], eleNeed, 'Boots');
      if (boots[ele] === boots.star)
        starCheck(boots[ele], eleNeed, 'Boots');
      if (boots[ele] === boots.faction)
        factionCheck(boots[ele], eleNeed, json[i]['heroFaction'], 'Boots');
    }

    const chest = json[i].chest;
    for (let ele in chest) {
      // if (chest[ele] === chest.mythic)
      //   mythicCheck(chest[ele], eleNeed, json[i].faction, jsonKeys[4]);
      if (chest[ele] == chest.level)
        levelCheck(chest[ele], eleNeed, 'Chest');
      if (chest[ele] === chest.star)
        starCheck(chest[ele], eleNeed, 'Chest');
      if (chest[ele] === chest.faction)
        factionCheck(chest[ele], eleNeed, json[i]['heroFaction'], 'Chest');
    }

    container.appendChild(titleName);
    container.appendChild(faction);
    container.appendChild(need);
    container.appendChild(eleNeed);

    section.appendChild(container);
  }
}
}
function levelCheck(element, object, equipment) {
  const li = document.createElement("li");
  switch(element){
    case 'zero':
      
      li.innerHTML = `<span class="equipment">${equipment}</span> needs 2 stones to T2`;
      object.appendChild(li);
    break;
    case "T1":
      li.innerHTML = `<span class="equipment">${equipment}</span> needs 1 stones to T2`;
      object.appendChild(li);
    break;
  }
  // if (element === "T0") {
  //   const li = document.createElement("li");
  //   li.textContent = `${equipment} needs to increase to T1`;
  //   object.appendChild(li);
  // }
}

function mythicCheck(element, object, word, equipment) {
  if (element === false) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="equipment">${equipment}</span> needs a faction equipment (${word})`;
    object.appendChild(li);
  }
}

function starCheck(element, object, equipment) {
  if (element < 5) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="equipment">${equipment}</span> needs to increase ${
      5 - element
    } stars`;
    object.appendChild(li);
  }
}

function factionCheck(element, object, heroFac, equipment) {
  if (element != heroFac) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="equipment">${equipment}</span> need a ${heroFac} equipment`;
    object.appendChild(li);
  }
}
function eraseMessage(section){
  setTimeout(()=>{
    section.textContent="";
  },4000)
}