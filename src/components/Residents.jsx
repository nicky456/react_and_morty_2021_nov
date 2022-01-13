import React from "react";
import { useFetch } from "../api/useFetch";
import CharacterCard from './CharacterCard'


const Residents = ({url}) => {

  const [ data, asdf, isPending ] = useFetch(url)


  console.log(isPending)
  console.log(data)


  return (
    <>
      { isPending && <div className="loading-center loading-bubble">Loading...</div>}
      { !isPending && 


        <div className="residents-box">
          <CharacterCard char={data} />
          {/* <figure>
            <img src={data.image} />
            <figcaption>{data.name}</figcaption>
          </figure> */}
        </div>
      }
    </>
  )
}

export default Residents