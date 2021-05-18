import gql from "graphql-tag";

const SingleRider_QUERY = gql`
query SingleRider($Id:ID!) {
    rider(id:$Id){
      first_name
      last_name
      nin_number
      balance
      amount_paid
    }
  }
`;

export default SingleRider_QUERY;