import gql from "graphql-tag";

const ViewRiders_QUERY = gql`
  query Riders {
    riders{
      id
      first_name
      last_name
      nin_number
      amount_owed
      amount_paid
    }
  }
`;

const SingleRider_Query = gql`
    query Riders {
      riders{
        id
      }
    }

`;

export default ViewRiders_QUERY;