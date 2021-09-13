import { useAtom } from "jotai";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../";
import { activeModal } from "../../state/modal";
import { makeRequest } from "../../utils";

const Container = styled.div``;

const Subtitle = styled.h1`
  font-weight: 400;
  margin: 25px 0;
  font-size: 1.15em;
`;

const Input = styled.input`
  border: none;
  width: 80%;
  font-size: 1em;
  color: #929292;
`;

const StarContainer = styled.span<{ filled: boolean }>`
  display: inline-flex;
  cursor: pointer;
  color: ${({ filled }) => (filled ? "#FFCD69" : "#E0E0E0")};
  transition: all 0.1s ease-in-out;
`;

const Error = styled.span`
  color: red;
`;

export const RatingModal = (): JSX.Element => {
  const [, setActiveModal] = useAtom(activeModal);
  const [input, setInput] = useState("");
  const [starValue, setStarValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Subtitle>Rating</Subtitle>
      {[...Array(5)].map((_, i) => {
        return (
          <StarContainer
            onMouseEnter={() => setHoverValue(i + 1)}
            onMouseLeave={() => setHoverValue(null)}
            onClick={() => {
              const newValue = i + 1;
              setStarValue(newValue);
            }}
            filled={(hoverValue || starValue) > i}
            key={i}
          >
            <FaStar size={25} />
          </StarContainer>
        );
      })}
      <Subtitle>Review</Subtitle>
      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing..."
      />
      <Button
        text="Submit review"
        onClick={async () => {
          if (input.length <= 0) return setError("You must set a review!");

          const { data, error } = await makeRequest(
            "/api/createReview",
            "POST",
            {
              message: input,
              rating: starValue,
            }
          );

          if (error) {
            return setError(error);
          }

          setActiveModal(null);
        }}
      />
    </Container>
  );
};
