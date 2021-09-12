import useSWR from "swr";
import { Reviews, useReviewsResponse } from "../types";

export const useReviews = ({
  take = 3,
}: {
  take?: number;
}): useReviewsResponse => {
  const { data, error } = useSWR(`/api/getReviews?take=${take}`);
  const reviews: Reviews = data.data;

  return {
    reviews,
    isLoading: !error && !data,
    isError: error,
  };
};
