import styled from "styled-components";

const Btn = styled.button`
  display: block;
`;

export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => unknown;
}): JSX.Element => {
  return <Btn onClick={onClick}>{text}</Btn>;
};
