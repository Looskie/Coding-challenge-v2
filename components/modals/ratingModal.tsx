import styled from "styled-components";
import { Button } from "..";
import { Stars } from "../stars";

const Container = styled.div``;

const Subtitle = styled.h1`
  font-weight: 400;
  margin: 25px 0;
  font-size: 1.15em;
`;

const Input = styled.input`
  border: none;
  font-size: 1em;
  color: #929292;
`;

export const RatingModal = (): JSX.Element => {
  return (
    <Container>
      <Subtitle>Rating</Subtitle>
      <Stars />
      <Subtitle>Review</Subtitle>
      <Input placeholder="Start typing..." />
      <Button text="Submit review" onClick={() => console.log("post")} />
    </Container>
  );
};
