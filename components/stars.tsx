import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled, { CSSProperties } from "styled-components";

const StarsWrapper = styled.div``;
const StarContainer = styled.span<{ filled: boolean; changeable: boolean }>`
  display: inline-flex;
  cursor: ${({ changeable }) => (changeable ? "pointer" : "unset")};
  color: ${({ filled }) => (filled ? "#FFCD69" : "#E0E0E0")};
  transition: all 0.1s ease-in-out;
`;

export const Stars = ({
  rating = 0,
  amount = 5,
  starSize = 25,
  changeable = true,
  style,
}: {
  rating?: number;
  amount?: number;
  starSize?: number;
  changeable?: boolean;
  style?: CSSProperties;
}): JSX.Element => {
  const [starValue, setStarValue] = useState(rating);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <StarsWrapper style={{ ...style }}>
      {[...Array(amount)].map((_, i) => {
        return (
          <StarContainer
            onMouseEnter={() => changeable && setHoverValue(i + 1)}
            onMouseLeave={() => changeable && setHoverValue(null)}
            onClick={() => {
              if (!changeable) return;

              const newValue = i + 1;
              setStarValue(newValue);
            }}
            filled={(hoverValue || starValue) > i}
            key={i}
            changeable={changeable}
          >
            <FaStar size={starSize} />
          </StarContainer>
        );
      })}
    </StarsWrapper>
  );
};
