import { useShoppingCart } from "use-shopping-cart"

const CheckoutBtn = () => {
    const handleCheckOut =  async ()=> {
        try {
            const res = await redirectToCheckout()
            if (res?.error){
                console.log(res)
            }
        }catch(error){
            console.log(error)
        }
    }
    const {redirectToCheckout} = useShoppingCart()
  return (
    <div className="btn btn-primary w-full" onClick={handleCheckOut}>
      Proceed to Checkout
    </div>
  )
}

export default CheckoutBtn
