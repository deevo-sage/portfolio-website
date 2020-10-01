import React from "react";
 const Top = () =>{

    return (
      <div className="top">
        <p id="typewriter">
          <br></br>
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "item 1", " rotated item 2"," number 3"]'
          ></span>
        </p>
      </div>
    );
 };
 export default Top;