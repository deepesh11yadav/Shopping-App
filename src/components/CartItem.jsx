
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-row items-center 
 transition duration-300 ease-in gap-2 p-10 mt-10 ml-[80px] mr-[200px] rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">

      <div>
        <div>
          <img src={item.image} className="h-[180px] w-[155px] " />
        </div>
        <div >
        <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 ml-[170px] mt-[-150px] ">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] ml-[170px] mt-[10px]">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
      </div>
          <div>
            <p  className="text-green-600 font-semibold ml-[170px] mt-[10px]">${item.price}</p>
            <div  className=" w-[60px] h-[10px] ml-[170px] hover:scale-110 mt-[10px]  transition duration-300 ease-in"
            onClick={removeFromCart}>
              <MdDelete />

            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
