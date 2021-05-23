import  logo  from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [oldExpression , setOldExpression]=useState("");
let [ expression , setExpression]=useState("0");
let [ prev , setPrev]=useState("ANS");
let numerics=new Set("0123456789.");
let operators=new Set("+-*/%");
let buttons=["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];


let evaluatExpression=function()
{
  let evaluation=eval(expression);
  setOldExpression(expression+ "=");
  setExpression(String(evaluation));
  setPrev("ANS");
}
let putnumerics =function(value){
  if(prev ==="ANS")
  {
    setOldExpression("Ans ="+ expression);
  setExpression(value);
  }
  else{
    setExpression(expression+ value);
  }
  setPrev("NUM");
};


let putoperator =function(value){
  if(prev!="OP")
  {
    setExpression(expression+ value);
    
  }
  else{
    setExpression(expression.slice(0, -1)+ value);
  }
  setPrev("OP");
};
let putdelete=function()
{ if(expression.length>=1){
  setExpression(expression.slice(0,-1));
}
setPrev("DEL");
};

let handleKeyUp = function(event){
console.log(event.key);
if(event.key==="Backspace")
{
  putdelete();
}
else if(numerics.has(event.key)){
  putnumerics(event.key);
}
else if(operators.has(event.key))
{
  putoperator(event.key);
}
else if(event.key==="Enter")
{
evaluatExpression();
}
};
  return (
    <div className="App"  tabIndex={0} onKeyUp={handleKeyUp} >

     
     <h1>My Calculator</h1>
      <div  style={{
        
      width:"400px",
     // height :"200px",
      background:"#ffffff",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-end",
      justifyContent:"center",
      padding:"20px",
      borderRadius:"10px",
      margin:"0px",
      overflow:"hidden",
      //border:"thin"
      border: "25px solid black"

      
    }}>
      <h6>{oldExpression}</h6>
      <h1>{expression}</h1>
      </div>

      <div  style={{
      width:"400px",
     // height :"200px",
      background:"#ffffff",
      display:"flex",
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:"center",
      padding:"20px",
      borderRadius:"10px",
      flexWrap:"wrap",
      border: "25px solid black"
      
    }}>
      {buttons.map(function(buttonValue,idx){
        return <button style={{
          width:"90px",
          padding:"5px",
          margin:"5px"
        }} onClick={function(){
          if(buttonValue==="AC")
          {
            putdelete();
          }
          else if(numerics.has(buttonValue)){
            putnumerics(buttonValue);
          }
          else if(operators.has(buttonValue))
          {
            putoperator(buttonValue);
          }
          else if(buttonValue==="=")
          {
          evaluatExpression();
          }
          
        }}
        >{buttonValue}</button>
      })}
      </div>
      
    </div>
  );
}

export default App;
