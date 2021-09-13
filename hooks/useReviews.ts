import useSWR from "swr";
import { useReviewsResponse } from "../types";
import { fetcher } from "../utils";

export const useReviews = (take?: number): useReviewsResponse => {
  const { data, error } = useSWR(`/api/getReviews?take=${take || 10}`, fetcher);
  const reviews = data?.data;

  return {
    reviews: reviews,
    isLoading: !error && !data,
    isError: error,
  };
};
