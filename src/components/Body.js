import RestaurantCard from "./ReastaurantCard";
// RestaurantList is JSON Data for displaying cards
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING")
    const json =  await data.json();
    console.log(json);
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  }  
 
if(listOfRestaurant.length ===0 ){
  return (<Shimmer/>)
}


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