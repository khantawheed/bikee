import { urlFor } from "@/app/lib/Sanity"
import Image from "next/image"
import Link from "next/link"
import { CgEye , CgShoppingBag } from 'react-icons/cg';
import AddtoCartBtn from "./AddtoCartBtn";
const Bike = ({bike}) => {
  const PopularBikeCat = bike.categories.find(
    (bike) => bike.name === 'popular'
  )
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-Primary/10 transition-all duration-300 flex
         justify-center items-center">
            {PopularBikeCat && (<div className="absolute top-8 left-8 bg-accent text-white px-3 
            text-sm uppercase font-medium">Popular</div>)}
            <Image src={urlFor(bike.images[0]).url()} width={300} height={180} alt=''/>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center
        gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddtoCartBtn btnStyle='btn-icon btn-accent' price_id={bike.price_id} icon={<CgShoppingBag/>} name={bike.name}
          currency='USD' description={bike.description} images={bike.images} price={bike.price}/>
          <Link href={`/product/${bike.slug}`}>
            <button className="btn btn-primary"><CgEye/></button>
            </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">{bike.categories[0].name}</h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">${bike.price}</div>
    </div>
  )
}

export default Bike
