import { useAtom } from "jotai";
import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "../components";
import { Stars } from "../components/stars";
import { activeModal } from "../state/modal";

const Container = styled.div`
  display: block;
  margin: 80px auto;
  width: 80%;
  max-width: 800px;
`;
const Title = styled.h1`
  font-size: 2.5em;
`;

const SecondaryTitle = styled.h1``;

const Review = styled.div`
  display: flex;
  align-items: center;
`;

const AverageReview = styled.h2`
  font-weight: 400;
  font-size: 2em;
  margin-right: 24px;
`;

const Seperator = styled.span`
  display: block;
  width: 100%;
  margin: 45px 0 30px;
  opacity: 1;
  border-bottom: 1px solid #b9b9b9;
`;

const ReviewOverview = styled.div`
  display: flex;
`;

const ReviewFeedback = styled.p`
  font-weight: 400;
`;
const ReviewRating = styled.span`
  font-weight: 700;
`;

const Home: NextPage = () => {
  const [, setCurrentModal] = useAtom(activeModal);

  return (
    <Container>
      <Title>The Minimalist Entrepreneur</Title>
      <Review>
        <AverageReview>4.3</AverageReview>
        <Stars
          rating={4}
          changeable={false}
          starSize={30}
          style={{ flexGrow: 1 }}
        />
        <Button
          text="Add review"
          style={{ margin: 0 }}
          onClick={() => setCurrentModal("addReview")}
        />
      </Review>
      <Seperator />
      <SecondaryTitle>Reviews</SecondaryTitle>
      <ReviewOverview>
        <Stars rating={4} changeable={false} />
        <ReviewFeedback>
          <ReviewRating>4</ReviewRating>
          it was alright
        </ReviewFeedback>
      </ReviewOverview>
      <ReviewOverview>
        <Stars rating={4} changeable={false} />
        <ReviewFeedback>
          <ReviewRating>4</ReviewRating>
          it was alright
        </ReviewFeedback>
      </ReviewOverview>
      <ReviewOverview>
        <Stars rating={4} changeable={false} />
        <ReviewFeedback>
          <ReviewRating>4</ReviewRating>
          it was alright
        </ReviewFeedback>
      </ReviewOverview>
    </Container>
  );
};

export default Home;
