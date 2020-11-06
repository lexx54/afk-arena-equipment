import {deleteData,setData,getData} from "./data.js"
const d=document,
  data=[];


d.addEventListener("click",e=>{
  if (e.target.matches('#btn-form')) {
    data.push(setData("hero","equipment","star","faction",'level'));
  console.log(data);
  localStorage.setItem("hero-info",JSON.stringify(data));
  }
  if (e.target.matches('#btn-form-get')){
    getData("hero-info")
  }
  if (e.target.matches("#btn-form-delete")){
    deleteData('hero-info');
  }

})

