import { FC, useEffect, useState } from "react";

interface ClientNotifProps {
  inc: number;
  decrement: number;
}

const ClientNotif: FC<ClientNotifProps> = (props) => {
  const [bgColor, setBgColor] = useState("yellow");

  useEffect(() => {
    if (props.inc < props.decrement) setBgColor("red");
    else if (props.inc > props.decrement) setBgColor("green");
    else setBgColor("yellow");
  }, [props.inc, props.decrement]);

  return (
    <div style={{ backgroundColor: bgColor, width: "50px", height: "50px" }} />
  );
};

export default ClientNotif;
