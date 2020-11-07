export function setData(...values){
  const $heroName=document.getElementById(values[0]),
      $heroFaction=document.getElementById(values[1]).children,
      $equipment=document.getElementById(values[2]).children,
      $star=document.getElementById(values[3]),
      $faction=document.getElementById(values[4]).children,
      $level=document.getElementById(values[5]).children;
      

  let $heroNameValue=$heroName.value,
    $heroFactionValue=checker($heroFaction),
    $equipmentValue=checker($equipment),
    $starValue=$star.value,
    $factionValue=checker($faction),
    $levelValue=checker($level);

  const data=new Hero($heroNameValue,$heroFactionValue,$equipmentValue,$starValue,$factionValue,$levelValue);
  cleaning(values);
  return data;
  
}
export function getData(localName){
  console.log("hola")
  let info=JSON.parse(localStorage.getItem(localName));
  // console.group(info)
  return info;
}

export function deleteData(localName,store,htmlStore){
  localStorage.removeItem(localName);
  store.splice(0,store.length);
  htmlStore.textContent='';
  console.log("adios");

}

function checker(obj){
  for (let ele of obj){
    if (ele.checked===true) return ele.value;
  }
}
// function equipmentChecker(equipment){
//   for (let ele of equipment){
//     if (ele.checked===true) return ele.value;
//   }
// }

// function factionChecker(faction){
//   for (let ele of faction){
//     if (ele.checked===true) return ele.value;
//   }
// }

// function levelChecker(level){
//   for (let ele of level){
//     if (ele.checked===true) return ele.value;
//   }
// }
function cleaning(list){
  for (let i=0 ; i<list.length ; i++){
    if (i===0 ||i===3){
      document.getElementById(list[i]).value="";
    } else {
      let listC=document.getElementById(list[i]).children
      for (let ele of listC){
        if (ele.type==="radio") ele.checked=false;
      }
    }
  }
}

function Hero(name,heroFaction,equipment,star,faction,level){
  this.name=name;
  this[equipment]={star,faction,level};
  this['heroFaction']=heroFaction;
}