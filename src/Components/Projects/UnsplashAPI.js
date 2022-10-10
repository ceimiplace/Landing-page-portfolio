import { useState } from "react";
import SearchBar from "./UnsplashApi-components/SearchBar";
import ItemsList from "./UnsplashApi-components/ItemsList";
export default function UnsplashAPI() {
  const [images, setImages] = useState([]);
  function whenUserSubmitsForm(term) {
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
  }
  return (
    <div className="grow w-4/6 flex flex-col  p-3  mx-auto">
      <SearchBar submited={whenUserSubmitsForm} />
      <ItemsList images={images} />
    </div>
  );
}
