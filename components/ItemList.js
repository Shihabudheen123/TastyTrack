import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item))

  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info?.name}</span>
              <span>
                -₹
                {item.card.info?.price
                  ? item.card.info?.price / 100
                  : item.card.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-lg ">{item.card.info?.description}</p>
          </div>
          <div className="relative w-2/12 p-4 flex flex-col items-center">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg"
              />
            )}
            <button
              className="-translate-y-5 font-Gilroy font-bold text-xl  text-green-600 p-2 shadow-lg  px-8 py-0.5 rounded-lg border-1 border-e-black bg-white"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
