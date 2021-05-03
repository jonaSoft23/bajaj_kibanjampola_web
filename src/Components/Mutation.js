import React from "react";
import { useMutation } from "@apollo/react-hooks";


const Mutation = ({ children, mutation, id }) => {
    const { data, loading, error } = useMutation(mutation, {
      variables: { id: id }
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
  };
  
  export default Mutation;