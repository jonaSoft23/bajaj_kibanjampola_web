import gql from "graphql-tag";

const ViewRiders_QUERY = gql`
  query Riders {
    riders{
      id
      first_name
      last_name
      nin_number
      balance
      amount_paid
    }
  }
`;

export default ViewRiders_QUERY;