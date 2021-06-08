import gql from "graphql-tag";

const ViewRiders_QUERY = gql`
query Riders {
  riders {
    id
    first_name
    last_name
    nin_number
    balance
    amount_paid
  }
  transactions {
    id
    amount
    date
    rider {
      id
      first_name
      last_name
    }
  }
}
`;

export default ViewRiders_QUERY;