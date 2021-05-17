import React from "react";
import Button from "@material-ui/core/Button";

function Clickable(props) {
  if (props.cName) {
    return (
      <Button id={props.cName} className="valButton">
        {props.val}
      </Button>
    );
  }
  // else if(props.cName==="equalsButton"){
  //   return (
  //     <Button id={props.cName} className="valButton">
  //       {props.val}
  //     </Button>
  //   );
  // }
  else {
    return <Button className="valButton">{props.val}</Button>;
  }
}
export default Clickable;
