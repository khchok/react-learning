import React from "react";
import Level3 from "./Level3";
interface IProps {
  text: string;
}
const Level2 = ({ text }: IProps) => {
  return (
    <>
      <p>Level2: {text}</p>
      <Level3 text={`${text}: from Level2`} />
    </>
  );
};

export default Level2;
