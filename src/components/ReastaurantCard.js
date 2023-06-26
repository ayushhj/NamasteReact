import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) =>{
    const {resdata} = props
    const{ cloudinaryImageId,
      name,
      cuisines,
      costForTwoString,
      avgRating} = resdata?.data
      return(
      <div className="rescard">
      <img className="resimg"  src={
            CDN_URL +
            cloudinaryImageId
          } />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString}</h4>
      </div>
      )
  }

  export default RestaurantCard