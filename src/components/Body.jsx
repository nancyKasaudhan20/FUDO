import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { RESTLIST_API } from '../utils/constant'
import { useState, useEffect } from 'react'
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(()=>{
     fetchData();
  },[]);

  const fetchData = async()=>{
     const data = await fetch(RESTLIST_API);
     const json = await data.json();
     console.log(json);
     setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  return(ListOfRestaurants.length ===0)?(<Shimmer/>):(
    <>
    <div>
      <button className='p-2 bg-purple-300'
      onClick={()=>{
        const filteredList = ListOfRestaurants.filter(
          (res)=> res?.info?.avgRating > 4.2
          )
          setListOfRestaurants(filteredList);
      }}
      >Top Rated Restaurants</button>
    </div>
    <div className='flex flex-wrap'>
    {ListOfRestaurants.map((restaurant)=>(
      <RestaurantCard resData = {restaurant}
      key = {restaurant?.info?.id}
      />
    ))}
      
    </div>
    </>
  )
}

export default Body