import { client } from '../app/lib/Sanity'
import Link from 'next/link';
import PopularBikeCarousel from './PopularBikeCarousel';
const getData = async () => {
    const query = `*[_type=='product' && references(*[_type=='category' && name=='popular']._id, 'categories')] {
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
const Popular = async () => {
  let bikes;
  try {
    bikes = await getData();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error or render an error message
  }

  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Bikes</h2>
        <p className='text-center mb-[30px]'>The world's most premium brands in one destination</p>
        <div>
          {bikes ? (
            <PopularBikeCarousel bikes={bikes}/>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <Link href='/our-bikes'>
          <button className='btn btn-accent mx-auto mt-10'>See All Bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default Popular;
