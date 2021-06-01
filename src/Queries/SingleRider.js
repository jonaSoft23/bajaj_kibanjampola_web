import gql from "graphql-tag";

const SingleRider_QUERY = gql`
query SingleRider($Id:ID!) {
    rider(id:$Id){
      first_name
      last_name
      nin_number
      balance
      amount_paid
      initial_charge
      profile_image{
        url
      }
    }
  }
`;

export default SingleRider_QUERY;