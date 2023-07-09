import React from "react";
import CardList from "./components/CardList";
import { data } from "./utils/data";

const HomeScreen = () => {
    return (
        <section className="m-5 text-center">
            <h1 className="text-5xl font-medium font-sans">
                Welcome to Trip Advisor
            </h1>
            <br />
            <h3 className="text-xl font-medium">
                Top continents for your next holiday.
            </h3>
            <CardList data={data.continents} type="continent" />
        </section>
    );
};

export default HomeScreen;
