import { Star_filled, Star_unfilled } from "../../assets";

interface starType {
  rating: number;
}

export const Star = ({ rating }: starType) => {
  return (
    <>
      {[...Array(3)].map((_, index: number) => {
        index += 1;

        return (
          <div key={index}>
            {rating >= index ? <Star_filled /> : <Star_unfilled />}
          </div>
        );
      })}
    </>
  );
};
