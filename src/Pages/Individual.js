
import React from "react";
import { useParams } from "react-router";

const Individual = () => {

    let { id } = useParams();

    return(
    <>
        <h1>This displays information for user {id} </h1>
    </>
);
}
export default Individual;