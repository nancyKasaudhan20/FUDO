import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { RESTLIST_API } from '../utils/constant'
import { useState, useEffect } from 'react'
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(()=>{
     fetchData();
  },[]);

  const fetchData = async()=>{
     const data = await fetch(RESTLIST_API);
     const json = await data.json();
     console.log(json);
     setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  return(ListOfRestaurants.length===0)?(<Shimmer/>):(
    <>
    <div className='flex gap-20'>
      <div className='flex'>
          <input type='text' placeholder="search" value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}
          className='bg-green-300 border-spacing-1 rounded-lg '></input>
          <button
          onClick={()=>{
            //filter the res cards and update the UI
            const filteredRestaurant = ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            // search Text
            setFilterRes(filteredRestaurant)
          
          }}
          >Search</button>
      </div>
      <button className='p-2 bg-purple-300'
      onClick={()=>{
        const filteredList = ListOfRestaurants.filter(
          (res)=> res?.info?.avgRating > 4.2
          )
          setFilterRes(filteredList);
      }}
      >Top Rated Restaurants</button>
    </div>
    <div className='flex flex-wrap'>
    {filterRes.map((restaurant)=>(
      <RestaurantCard resData = {restaurant}
      key = {restaurant?.info?.id}
      />
    ))}
      
    </div>
    </>
  )
}

export default Body