import { useEffect, useState } from "react";
import SearchBar from "./UnsplashApi-components/SearchBar";
import ItemsList from "./UnsplashApi-components/ItemsList";
export default function UnsplashAPI() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => setImages(dates.results));
  }, [term]);
  return (
    <div className="grow w-4/6 flex flex-col  p-3  mx-auto">
      <SearchBar submited={setTerm} />
      <ItemsList images={images} />
    </div>
  );
}
