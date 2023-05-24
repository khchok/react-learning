import React from "react";

interface IProps {
  text: string;
}

const Level3 = ({ text }: React.PropsWithChildren<IProps>) => {
  return <p>Level3 Receiving props: {text}</p>;
};

export default Level3;
