import { CDN_URL } from "../utils/constant"
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData?.info;
  return (
    <>
    <div>
        <img alt="img" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
    </div>
    </>
  )
}

export default RestaurantCard