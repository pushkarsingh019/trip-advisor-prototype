import React from "react";
import { useParams } from "react-router-dom";
import CardList from "./components/CardList";
import { data } from "./utils/data";

const ContinentScreen = () => {
    const { continentId } = useParams();
    const continentToShow = data.continents.find(
        (continent) => continent.id === Number(continentId)
    );
    return (
        <section className="m-5 text-center">
            <h1 className="text-3xl font-medium font-sans">
                Top {continentToShow.countries.length} countries in{" "}
                {continentToShow.name} to visit
            </h1>
            <br />
            <CardList data={continentToShow.countries} type="countries" />
        </section>
    );
};

export default ContinentScreen;
