export function setData(...values){
  const $heroName=document.getElementById(values[0]),
    $equipment=document.getElementById(values[1]),
    $star=document.getElementById(values[2]),
    $faction=document.getElementById(values[3]),
    $level=document.getElementById(values[4]),
    data=[];
  let $heroNameValue=$heroName.value,
    $equipmentValue=$equipment.value,
    $starValue=$star.value,
    $factionValue=$faction.value,
    $levelValue=$level.value;
    
  console.log($equipmentValue)
    if ($heroNameValue==="") $heroName.focus();
    else if ($starValue==="") $star.focus();
    else if ($factionValue==="")$faction.focus();
    else if ($levelValue==="")$level.focus();
    else{
      // localStorage.setItem("nombre",$nameValue);
      // localStorage.setItem("age",$ageValue)
      data.push($heroNameValue,$starValue,$factionValue,$levelValue);
      document.getElementById(values[0]).value="";
      document.getElementById(values[1]).value="";
      document.getElementById(values[2]).value="";
      document.getElementById(values[3]).value="";
      return data;
    } 
  
}

export function getData(localName){
  console.log("hola")
  let info=JSON.parse(localStorage.getItem(localName));
  console.group(info)
}

export function deleteData(localName){
  localStorage.removeItem(localName)
  console.log("adios")

}