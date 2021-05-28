import gql from "graphql-tag";

const ViewLastTransaction_Query = gql `
query LastTransaction ($Id:ID!){
  transactions(limit: 1, sort: "date:desc", where: { rider:{id:$Id}} ) {
    id
    date
    rider {
      _id
      first_name
      last_name
    }
  }
}
`;

export default ViewLastTransaction_Query;