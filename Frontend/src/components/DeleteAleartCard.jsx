import {useContext} from "react";
import {AppContext} from "../context/AppContext.js";

export function DeleteAleartCard(){
  return(
    <div className={'h-screen w-screen fixed flex justify-center items-center'}>
     <div className={'card w-70 h-50'}>
        <p>Are you sure ? for delete Task </p>
       <div className={'w-full h-auto'}>
        <button className={'bg-green-500 p-2 w-15 '}>Yes</button>
        <button>No</button>
       </div>
     </div>
    </div>
  )
}