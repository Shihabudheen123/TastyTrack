import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(0 )  

  if (resInfo === null) return <Shimmer />;
  console.log("resInfo", resInfo);


  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        //categories accordions
      }

      {categories.map((categorie , index) => (
        <RestaurantCategory
          key={categorie.card?.card?.title}
          data={categorie.card?.card}
          showItems={index === showIndex  ? true: false}
          setShowIndex= {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
