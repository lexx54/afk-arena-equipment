import {deleteData,setData,getData} from "./data.js"
const d=document,
  data=[];


d.addEventListener("click",e=>{
  if (e.target.matches('#btn-form')) {
    if (data.length===0) data.push(setData("hero","equipment","star","faction",'level'));
    else{
      let temporalData=setData("hero","equipment","star","faction",'level');
      for (let ele of data){
        if (ele.name===temporalData.name) Object.assign(ele,temporalData);
        else (data.push(temporalData));
      }
    };
    console.log(data);
    localStorage.setItem("hero-info",JSON.stringify(data));
  }
  if (e.target.matches('#btn-form-get')){
    gather(getData("hero-info"));
  }
  if (e.target.matches("#btn-form-delete")){
    deleteData('hero-info',data);
  }

})

function gather(listOfObjects){
  let heroesName= listOfObjects.map((ele)=>{
    return ele.name;
  })
  for (let i=0; i<listOfObjects.length;i++){

  }
  console.log(heroesName)
}