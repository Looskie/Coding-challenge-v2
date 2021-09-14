import { useAtom } from "jotai";
import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "../components";
import { Stars } from "../components/Stars";
import { useReviews } from "../hooks/useReviews";
import { activeModal } from "../state/modal";
import { Review as ReviewType } from "../types";

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
  align-items: center;
`;

const ReviewFeedback = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  color: #797874;
`;

const ReviewRating = styled.span`
  font-size: 1.1em;
  font-weight: 700;
  color: black;
`;

const Home: NextPage = () => {
  const [, setCurrentModal] = useAtom(activeModal);
  const { reviews, isLoading, isError } = useReviews();

  const average =
    reviews?.reduce((total, next) => total + next.rating, 0) / reviews?.length;

  return (
    <Container>
      <Title>The Minimalist Entrepreneur</Title>
      <Review>
        {isLoading && "Loading"}
        {reviews && (
          <>
            <AverageReview>
              {average.toFixed() !== "NaN" ? average.toFixed(1) : 0}
            </AverageReview>
            <Stars
              rating={Math.round(average)}
              changeable={false}
              starSize={30}
              style={{ flexGrow: 1 }}
            />
            <Button
              text="Add review"
              style={{ margin: 0 }}
              onClick={() => setCurrentModal("addReview")}
            />
          </>
        )}
      </Review>
      <Seperator />
      <SecondaryTitle>Reviews</SecondaryTitle>
      {isLoading && !isError && "Loading"}
      {isError && "An error occurred whilst fetching reviews!"}

      {reviews && reviews.length > 0 ? (
        reviews.map((review, i: number) => {
          return (
            <ReviewOverview key={i}>
              <Stars
                style={{ marginRight: 25 }}
                rating={review.rating}
                changeable={false}
              />
              <ReviewFeedback>
                <ReviewRating>{review.rating}</ReviewRating>, {review.message}
              </ReviewFeedback>
            </ReviewOverview>
          );
        })
      ) : (
        <>{!isError && <p>No reviews yet!</p>}</>
      )}
    </Container>
  );
};

export default Home;
