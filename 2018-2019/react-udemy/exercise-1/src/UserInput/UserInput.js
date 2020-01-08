import React from "react";

const userInput = (props) => {
  const style={ 
    border : '2px solid grey'
  }
  return (
    <div  className="UserInput">
      <input style={style} value={props.currentValue} onChange={props.changeHandler} type="text" />
    </div>
  );
};

export default userInput;
