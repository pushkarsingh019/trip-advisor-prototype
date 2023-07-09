import React from "react";
import { useParams } from "react-router-dom";
import CardList from "./components/CardList";
import { data } from "./utils/data";

const PlaceScreen = () => {
    const { placeId, countryId, continentId } = useParams();
    const destinations = data.continents
        .find((continent) => continent.id === Number(continentId))
        .countries.find((country) => country.name === countryId).destinations;
    return (
        <section className="m-5 text-center">
            <h1 className="text-2xl">Top Attractions in {countryId}</h1>
            <br />
            <CardList data={destinations} />
        </section>
    );
};

export default PlaceScreen;
