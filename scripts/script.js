import { createCard } from "./cardCreator.js";
import {deleteData,setData,getData} from "./data.js"
const d=document,
  $showContainer=d.getElementById("shower"),
  data=JSON.parse(localStorage.getItem('hero-info'))||[];

  console.log(data)

d.addEventListener("click",e=>{
  if (e.target.matches('#btn-form')) {
    if (data.length===0) data.push(setData("hero","heroFaction","equipment","star","faction",'level'));
    else{
      let temporalData=setData("hero","heroFaction","equipment","star","faction",'level');
      for (let ele of data){
        if (ele.name===temporalData.name) Object.assign(ele,temporalData);
        else (data.push(temporalData));
      }
    };
    console.log(data);
    localStorage.setItem("hero-info",JSON.stringify(data));
  }
  if (e.target.matches('#btn-form-get')){
    createCard(getData("hero-info"),$showContainer)
  }
  if (e.target.matches("#btn-form-delete")){
    deleteData('hero-info',data,$showContainer);
    console.log(data)
  }
  if (e.target.matches('#btn-form-hide')){
    $showContainer.innerHTML='';
  }

})