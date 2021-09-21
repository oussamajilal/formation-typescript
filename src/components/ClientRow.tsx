import { FC, useState } from "react";
import ClientNotif from "./ClientNotif";

interface ClientRowProps {
  id: number;
  firstName: string;
  lastName: string;
}

const ClientRow: FC<ClientRowProps> = (props) => {
  const [inc, setInc] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const handleIncClick = () => {
    setInc(inc + 1);
  };
  const handleDecrementClick = () => {
    setDecrement(decrement + 1);
  };
  return (
    <tr>
      <td>
        <ClientNotif inc={inc} decrement={decrement} />
      </td>
      <td>{props.id}</td>
      <td>{props.lastName}</td>
      <td>Last Name: {props.lastName}</td>
      <td data-testid="inc-cell">{inc}</td>
      <td data-testid="dec-cell">{decrement}</td>
      <td>
        <button data-testid="inc-btn" onClick={handleIncClick}>
          Increment
        </button>
        <button data-testid="dec-btn" onClick={handleDecrementClick}>
          Decrement
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
