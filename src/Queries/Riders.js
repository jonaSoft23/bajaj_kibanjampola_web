import gql from "graphql-tag";

const ViewRiders_QUERY = gql`
  query Riders {
    riders{
      first_name
      last_name
      nin_number
      amount_owed
      amount_paid
    }
  }
`;

export default ViewRiders_QUERY;