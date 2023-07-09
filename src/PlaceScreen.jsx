import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./utils/data";

const PlaceScreen = () => {
    const { placeId, continent } = useParams();
    return <section className="m-5 text-center"></section>;
};

export default PlaceScreen;
