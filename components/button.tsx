import styled, { CSSProperties } from "styled-components";

const Btn = styled.button`
  display: block;
  margin: 25px 0 10px;
  background: #fff;
  color: #797874;
  font-weight: 600;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 9px 25px;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Button = ({
  text,
  style,
  onClick,
}: {
  text: string;
  style?: CSSProperties;
  onClick: () => unknown;
}): JSX.Element => {
  return (
    <Btn style={{ ...style }} onClick={onClick}>
      {text}
    </Btn>
  );
};
