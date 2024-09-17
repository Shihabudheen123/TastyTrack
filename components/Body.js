import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";

import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestraunts] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardIsOpen = withIsOpenLabel(RestaurantCard);

  // console.log(ListOfRestaurants)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.498066699999999&lng=76.3388484&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json); // Log the entire response for debugging

      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        const restaurantInfo = restaurants.map((restaurant) => restaurant.info);
        setListOfRestraunts(restaurantInfo);
        setFilteredRestaurant(restaurantInfo);
      } else {
        throw new Error(
          "Path to restaurant data is incorrect or data is missing"
        );
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError(error.message);
    }
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !! please check your internet connection
      </h1>
    );
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRes = ListOfRestaurants.filter(
                (res) => res.avgRating >= 4.3
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {error ? (
          <div>Error: {error}</div>
        ) : ListOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          Array.isArray(filteredRestaurant) &&
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              {
                //ifrestaurant is promoted then add a promoted label to it
                restaurant.isOpen ? (
                  <RestaurantCardIsOpen resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
