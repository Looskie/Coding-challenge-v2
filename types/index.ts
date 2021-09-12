export interface Reviews {
  [key: string]: {
    message: string;
    rating: number;
  };
}

export interface useReviewsResponse extends useSWR {
  reviews: Reviews;
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
