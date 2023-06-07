import React from "react";
import Level2 from "./Level2";
interface IProps {
  text: string;
}
const Level1 = ({ text }: React.PropsWithChildren<IProps>) => {
  return (
    <>
      <p>Level1: {text}</p>
      <Level2 text={`${text} from Level1`} />
    </>
  );
};

export default Level1;
