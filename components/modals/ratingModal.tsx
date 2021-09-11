import styled from "styled-components";
import { Button } from "..";
import { Stars } from "../stars";

const Container = styled.div``;

const Subtitle = styled.h1`
  font-weight: 400;
  margin: 25px 0;
  font-size: 1.15em;
`;

export const RatingModal = (): JSX.Element => {
  return (
    <Container>
      <Subtitle>Rating</Subtitle>
      <Stars />
      <Subtitle>Review</Subtitle>
      <textarea placeholder="Start typing..."></textarea>
      <Button text="Submit review" onClick={() => console.log("post")} />
    </Container>
  );
};
