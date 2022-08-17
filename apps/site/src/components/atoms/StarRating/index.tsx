import theme from "@setup/theme";
import StarRatingComponent from "react-star-rating-component";

import { StarRatingProps } from "./types";

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <StarRatingComponent
      value={rating}
      starColor={theme.colors.Yellow}
      emptyStarColor={theme.colors.DarkGrey}
      name="StarRating"
    />
  );
};

export default StarRating;
