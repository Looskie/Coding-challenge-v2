export interface Reviews {
  [key: string]: Review;
}

export interface Review {
  message: string;
  rating: number;
}

export interface useReviewsResponse extends useSWR {
  reviews: Array<Review>;
}

export interface useSWR {
  isLoading: boolean;
  isError: boolean;
}

export type Data = {
  success: boolean;
  message: string;
  data?: any;
};
