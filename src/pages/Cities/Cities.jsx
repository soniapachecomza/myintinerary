
import SearchCities from "../../components/SearchCities/SearchCities.jsx";
import "./cities.css";
import { useState, useEffect } from "react";
import CardCity from "../../components/CardCitie/CardCity.jsx";
import Spinner from "react-bootstrap/Spinner";

export default function Cities() {
  const [data, setDatos] = useState([]);
  const [imgFind, setImgFind] = useState("");
  const [find, setFind] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5500/api/cities/?name=${find}`)
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.response);
      });
  }, [find]);

  const handleChange = (e) => {
    setImgFind(e.target.value);
    if (e.target.value == "") setFind("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFind(imgFind);
  };
  return (
    <main>
      <section className="d-flex justify-content-center align-items-center py-3 bg-search ">
        <SearchCities handleChange={handleChange} handleClick={handleClick} />
      </section>
      <section className="d-flex w-100 bg-dark px-3 pt-3 pb-5 gap-2 flex-wrap align-items-top justify-content-evenly">
        {data && data.length ? (
          data.map((city) => <CardCity key={city._id} city={city} />)
        ) : find != "" ? (
          <h2 className="display-4 text-white text-center cities-height">
            Not found
          </h2>
        ) : (
          
          <>
            <Spinner animation="grow" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>

          </>
        )}
      </section>
    </main>
  );
}
