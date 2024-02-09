'use client'
import { useShoppingCart } from "use-shopping-cart"
import { useToast } from "./ui/use-toast";
const AddtoCartBtn = ({btnStyle,text,icon,id,name,
  currency, description, images, price, price_id}) => {
    const {addItem} = useShoppingCart();
    const {toast}= useToast()
    const bike = {
      id: id,
      currency: currency,
      description: description, 
      images:  images, 
      price: price,
      name: name,
      price_id: price_id
    }
  return (
    <button className={`${btnStyle}`} onClick={()=>{addItem(bike)
    toast({
      title : `${name} has been added to the cart`
    });}}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  )
}

export default AddtoCartBtn
