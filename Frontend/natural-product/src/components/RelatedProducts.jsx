import React, { useEffect ,useState } from 'react'
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';
const RelatedProducts = ({category,subCategory}) => {
    const {products} = useSelector((state) => state.shop);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if (products.length > 0){

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => item.category === category && item.subCategory ===subCategory);
            console.log(productsCopy.slice(0,5));
            setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-3 '>
          <Title text1="RELATED" text2="PRODUCTS" />
        </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}

         </div>
    </div>
  )
}

export default RelatedProducts