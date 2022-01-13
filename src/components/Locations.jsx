import React from "react";
import LocationCard from './LocationCard'
import { useLocations } from '../api/useData';
import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'


const Locations = () => {

  const [ pageNum, setPageNum ] = useState(1)
  const [ isPending, locations ] = useLocations(pageNum);
  const [ locationKeeper, setLocationKeeper ] = useState([])

  const getLoc = async (pageNum) => {
    const pageData = await axios.get("https://rickandmortyapi.com/api/location/?page=" + pageNum)
    for (const locs of pageData.data.results) {
      locationKeeper.push(locs)
    }
    
    setLocationKeeper([...locationKeeper])
    setPageNum(pageNum + 1)
  }
  useEffect(() => {
    getLoc(pageNum)
  },[])
  console.log(locationKeeper)

  const triggerLoad = () => {
    
    getLoc(pageNum)
  }



  return ( 
    <InfiniteScroll dataLength={locationKeeper.length} next={triggerLoad} hasMore={pageNum < 8} loader={"Loading..."} endMessage={"End of story..."}>
      <div className="loc-container">

        { isPending && <div className="loading-center loading-bubble">Loading...</div>}

          { !isPending && locationKeeper.map(loc =>
          <LocationCard loc={loc} key={loc.id}/>
          )}
          
      </div>
    </InfiniteScroll>
  )
}
 
export default Locations;
