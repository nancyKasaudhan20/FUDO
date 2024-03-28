import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, cuisines, cloudinaryImageId,aggregatedDiscountInfoV3
  } = resData?.info;
  return (
    <>
    <div className="w-28 h-60 border-0 rounded-md shadow-lg bg-slate-400 m-6">
      <span>{aggregatedDiscountInfoV3?.header}</span> {" "}
      <span>{aggregatedDiscountInfoV3?.subHeader}</span>
       <img src={CDN_URL+cloudinaryImageId}/>
       <h2>{name} </h2>
       <h3>{cuisines}</h3>
       <h4>4.5 stars</h4>
    </div>
    </>
  )
}

export default RestaurantCard;