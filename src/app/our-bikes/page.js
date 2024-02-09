import BikeCategories from '@/components/BikeCategories';
import { client } from '../lib/Sanity';
import Link from 'next/link';

const getData = async () => {
    const query = `*[_type=='product' ] {
      _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]->{
        name
      }
    }`;
    const data = await client.fetch(query);
   
    return data;
}
const Ourbikes = async () => {
  let bikes;
  try {
    bikes = await getData();
    console.log(bikes)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return (
    <div>
      <BikeCategories bikes={bikes}/>
    </div>
  )
}

export default Ourbikes
