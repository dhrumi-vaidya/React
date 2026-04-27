// import { useState } from "react";
// import ColorPicker from "../../common/ColorPicker";
// import Card from "../../common/Card/Card";

import { PasswordGenerator } from "../../common/PasswordGenerator";

function Home() {
  {/* counter task */}
  // const [count, setCount] = useState(1);
//   const onAdd = () => {
//     if(count < 20)
//     setCount(count + 1);
//   else {
//     alert("Count cannot be more than 20");
//   }
// }
//   const onRemove = () => {
//     if(count > 0) {
//       setCount(count - 1);
//     }
//     else {
//       alert("Count cannot be less than 0");
//     } 
//   }
  return(
  <>  
  {/* counter task */}
  {/* <h1>Counter </h1>
  <button onClick={onAdd}>Add {count}</button>
  <button onClick={onRemove}>Remove {count}</button> */}
  {/*  */}
  {/* props */}
{/* <Card name='Dhrumi' btntext="View Profile"/>
<Card name='Dummy'/> */}
   {/* color picker task */}
   {/* <ColorPicker /> */}

   <PasswordGenerator />



  </>
   )
}

export default Home;