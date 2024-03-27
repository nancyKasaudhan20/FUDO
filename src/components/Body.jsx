import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='flex'>
      <RestaurantCard 
      name ="KFC" cuisines="😒🥱😶‍🌫️😛"
      />
      <RestaurantCard 
      name ="Dominos" cuisines="😋😘❤️🍉"/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
    </div>
  )
}

export default Body