import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6';
import { urlFor } from "@/app/lib/Sanity";

const CartItem = ({ item }) => {
  const {removeItem, incrementItem, decrementItem}=useShoppingCart();
  const imageUrl = item.images && item.images.length > 0 ? urlFor(item.images[0]).url() : '';
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      <div className="w-[110px] h-[110px] relative">
        {imageUrl && (
          <Image
            src={imageUrl}
            fill
            priority
            sizes='(max-width:110px)110px 110px'
            className="object-contain"
            alt=''
          />
        )}
      </div>
      <div className="flex-grow flex flex-col justify-center gap-4 ml-4">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button  onClick={()=>removeItem(item.id)}><FaX className='text-sm' /></button>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-4">
                <button onClick={()=>decrementItem(item.id)}>
                    <FaMinus className="text-[10px]"/>
                </button>
                <div className="font-semibold">{item.quantity}</div>
                <button onClick={()=>incrementItem(item.id)}>
                    <FaPlus className="text-[10px]"/>
                </button>
            </div>
            <div className="font-semibold text-balance text-right">${item.price * item.quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
