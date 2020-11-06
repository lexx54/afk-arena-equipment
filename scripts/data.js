export function setData(...values){
  const $heroName=document.getElementById(values[0]),
      $equipment=document.getElementById(values[1]).children,
      $star=document.getElementById(values[2]),
      $faction=document.getElementById(values[3]).children,
      $level=document.getElementById(values[4]).children;
      

  let $heroNameValue=$heroName.value,
    $equipmentValue=equipmentChecker($equipment),
    $starValue=$star.value,
    $factionValue=factionChecker($faction),
    $levelValue=levelChecker($level);

  const data=new Hero($heroNameValue,$equipmentValue,$starValue,$factionValue,$levelValue);
  cleaning(values);
  return data;
  

  // console.log($equipmentValue)
    // if ($heroNameValue==="") $heroName.focus();
    // else if ($starValue==="") $star.focus();
    // else if ($factionValue==="")$faction.focus();
    // else if ($levelValue==="")$level.focus();
    // else{
       // localStorage.setItem("nombre",$nameValue);
       // localStorage.setItem("age",$ageValue)
       // data.push($heroNameValue,$starValue,$factionValue,$levelValue);
    //   document.getElementById(values[0]).value="";
    //   document.getElementById(values[1]).value="";
    //   document.getElementById(values[2]).value="";
    //   document.getElementById(values[3]).value="";
    //   return data;
    // } 
  
}

export function getData(localName){
  console.log("hola")
  let info=JSON.parse(localStorage.getItem(localName));
  // console.group(info)
  return info;
}

export function deleteData(localName,store){
  localStorage.removeItem(localName);
  store=[];
  console.log("adios")

}

function equipmentChecker(equipment){
  for (let ele of equipment){
    if (ele.checked===true) return ele.value;
  }
}

function factionChecker(faction){
  for (let ele of faction){
    if (ele.checked===true) return ele.value;
  }
}

function levelChecker(level){
  for (let ele of level){
    if (ele.checked===true) return ele.value;
  }
}
function cleaning(list){
  for (let i=0 ; i<list.length ; i++){
    if (i===0 ||i===2){
      document.getElementById(list[i]).value="";
    } else {
      let listC=document.getElementById(list[i]).children
      for (let ele of listC){
        if (ele.type==="radio") ele.checked=false;
      }
    }
  }
}

function Hero(name,equipment,star,faction,level){
  this.name=name;
  this[equipment]={star,faction,level}
}