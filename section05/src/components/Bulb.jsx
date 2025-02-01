import { useState } from "react";

const Bulb = () => {
  const [light, setLigth] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{backgroundColor : "orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor : "gray"}}>OFF</h1>
      )}

        <button onClick={()=>{
          setLigth(light === "ON" ? "OFF" : "ON");
        }} >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
    </div>
  )
};

export default Bulb;