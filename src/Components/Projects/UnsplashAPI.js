import { useEffect, useState } from "react";
import SearchBar from "./UnsplashApi-components/SearchBar";
import ItemsList from "./UnsplashApi-components/ItemsList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function UnsplashAPI({ changenavi }) {
  let { id } = useParams();
  if (!id) {
    id = 1;
  }
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
<<<<<<< HEAD

  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${id}`, {
=======
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
>>>>>>> parent of 0e19d72 (navigation page unsplash api)
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
<<<<<<< HEAD
      .then((dates) => {
        console.log(dates);
        setImages(dates.results);
      });
  }, [term, id]);

=======
      .then((dates) => setImages(dates.results));
  }, [term]);
>>>>>>> parent of 0e19d72 (navigation page unsplash api)
  return (
    <div className="grow w-4/6 flex flex-col  p-3  mx-auto">
      <SearchBar submited={setTerm} />
      <ItemsList images={images} />
<<<<<<< HEAD
      <div className="flex justify-center gap-4">
        <div className="border-2 border-black p-4 text-lg rounded">
          Previous page
        </div>
        <div
          onClick={() => changenavi(`projects/UnsplashAPI/${Number(id) + 1}`)}
          className="border-2 border-black p-4 text-lg rounded"
        >
          Next page
        </div>
      </div>
=======
>>>>>>> parent of 0e19d72 (navigation page unsplash api)
    </div>
  );
}
