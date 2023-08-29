import React from "react";
import CardHome from "../../components/CardHome/CardHome.jsx";
import CarrouselHome from "../../components/CarrouselHome/CarrouselHome.jsx";
import "./home.css";

export default function Home() {
  return (
    <main className="bg-black">
      <section className="bg-hero d-flex justify-content-center">
        <CardHome />
      </section>
      <section className="d-flex flex-column justify-content-center py-5 view align-items-center">
        <h1 className="text-white"> My Tynerary</h1>
        <CarrouselHome />
      </section>
    </main>
  );
}
