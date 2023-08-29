import React from "react";
import CardDetails from "../../components/CardDetails/CardDetails.jsx";
import { useState, useEffect } from "react";
import "./cities.css";
import { useParams, Link as Anchor } from "react-router-dom";
import backArrow from "../../assets/back.svg";
import maintenance from "../../assets/maintenance.png";

export default function DetailsCity() {
  // const params = useParams();
  // const [data, setDatos] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:5500/api/cities/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDatos(data.response);
  //     });
  // }, []);
  return (
    <main>
      <section className="bg-dark back-arrow mw-25">
        <Anchor className="back-arrow" to={"/cities"}>
          <img src={backArrow} alt="back-arrow" />
        </Anchor>
      </section>
      <section className="bg-dark d-flex justify-content-center align-items-center details">
        {Object.keys(data).length > 0 ? (
          <CardDetails className="w-100" city={data} />
        ) : (
          <h1>Error</h1>
        )}
      </section>
      <section className="bg-dark d-flex justify-content-center pb-3">
        <img
          src={maintenance}
          alt="en construccion"
          style={{ width: "50%" }}
        />
      </section>
    </main>
  );
}
