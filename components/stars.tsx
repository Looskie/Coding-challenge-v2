import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarsWrapper = styled.div``;
const StarContainer = styled.span<{ filled: boolean }>`
  display: inline-flex;
  cursor: pointer;
  color: ${({ filled }) => (filled ? "#FFCD69" : "#E0E0E0")};
`;

export const Stars = ({
  rating = 4,
  amount = 5,
  starSize = 25,
}: {
  rating?: number;
  amount?: number;
  starSize?: number;
}): JSX.Element => {
  const [starValue, setStarValue] = useState(rating);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <StarsWrapper>
      {[...Array(amount)].map((_, i) => {
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
            <FaStar size={starSize} />
          </StarContainer>
        );
      })}
    </StarsWrapper>
  );
};
