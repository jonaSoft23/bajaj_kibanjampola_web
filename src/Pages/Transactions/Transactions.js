import { useParams } from "react-router";
import React from "react";


const Transactions = () => {
    let { id } = useParams();
        return(
        <>
            <h1>These are transactions for {id}</h1>
        </>
        );
};

export default Transactions;