import React from "react";
import Card from "./Card";

const CardList = ({ data, type, continent }) => {
    return (
        <section className="flex gap-5 gap-x-10 items-center justify-center my-4">
            {data.map((data) => {
                return (
                    <Card
                        id={data.id}
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        type={type}
                        continent={continent}
                    />
                );
            })}
        </section>
    );
};

export default CardList;
