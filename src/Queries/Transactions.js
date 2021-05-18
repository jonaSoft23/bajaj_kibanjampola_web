import gql from "graphql-tag";

const ViewTransactions_QUERY = gql`
query Transactions {
    transactions {
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

export default ViewTransactions_QUERY;