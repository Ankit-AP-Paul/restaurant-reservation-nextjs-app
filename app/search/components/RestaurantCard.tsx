import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { calculateReviewRatingAvg } from "@/utils/calculateReviewRatingAvg";
import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  locaton: Location;
  slug: string;
  reviews: Review[];
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const renderRating = () => {
    const rating = calculateReviewRatingAvg(restaurant.reviews);
    if (Number(rating) > 4) return "Awesome";
    else if (Number(rating) <= 4 && Number(rating) > 3) return "Good";
    else if (Number(rating) <= 3 && Number(rating) > 0) return "Average";
    else return "";
  };
  return (
    <div className="border-b flex pb-5">
      <img src={restaurant.main_image} alt="" className="w-60 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRating()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.locaton.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
