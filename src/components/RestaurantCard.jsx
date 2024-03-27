import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
  const {name, cuisines} = props;
  return (
    <>
    <div className="w-28 h-60 border-0 rounded-md shadow-lg bg-slate-400 m-6 ">
       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
       <h2>{name} </h2>
       <h3>{cuisines}</h3>
       <h4>4.5 stars</h4>
    </div>
    </>
  )
}

export default RestaurantCard;