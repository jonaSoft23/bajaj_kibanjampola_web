import gql from "graphql-tag";

const ViewRiders_QUERY = gql`
  query Riders {
    riders{
      first_name
      last_name
      nin_number
    }
  }
`;

export default ViewRiders_QUERY;