import { useEffect, useState } from "react";
import SearchBar from "./UnsplashApi-components/SearchBar";
import ItemsList from "./UnsplashApi-components/ItemsList";
export default function UnsplashAPI() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => {
        console.log(dates);
        setImages(dates.results);
      });
  }, [term, page]);
  console.log(page);
  return (
    <div className="grow w-4/6 flex flex-col  p-3  mx-auto">
      <SearchBar submited={setTerm} initialTerm={term} />
      <ItemsList images={images} />
      <div className="flex justify-center gap-4">
        <div
          onClick={() => setPage((prev) => prev - 1)}
          className="border-2 border-black p-4 text-lg rounded"
        >
          Previous page
        </div>
        <div
          onClick={() => setPage((prev) => prev + 1)}
          className="border-2 border-black p-4 text-lg rounded"
        >
          Next page
        </div>
      </div>
    </div>
  );
}
