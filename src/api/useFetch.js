import React, { useState, useEffect } from "react";

/**
     Fetch data from the given url. If it can't get any data from the url, than it writes a message into the console.
     *
     * @param initUrl string that gives the route that the function fetch data from.
     */
export const useFetch = (initUrl) => {
  const [isPending, setIsPending] = useState(true)
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.status !== 200) return "There must be a problem";
          return response.json();
        })
        .then((json) => {
          setData(json)
          setIsPending(false)
        });
    }, 1000)
  }, [url]);

  return [data, setUrl, isPending];
};
