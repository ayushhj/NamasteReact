import RestaurantCard from "./ReastaurantCard";
// RestaurantList is JSON Data for displaying cards
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList)
    return(
      <div className="body">
       <div className="search">Search</div>
       <div>
       <button
       className="filter-btn"
       onClick={()=>{
        const filteredList = listOfRestaurant.filter((res)=> res.data.avgRating > 4);
        setlistOfRestaurant(filteredList);
        console.log(filteredList)
       }} 
       >

       Filter top restaurant</button>
       </div>
       <div className="res-container">
       {listOfRestaurant.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} resdata={restaurant} />;
      })}
       </div>
      </div>  



)
}

export default Body