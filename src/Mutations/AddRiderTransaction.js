import gql from "graphql-tag";

const AddRiderTransaction = gql`
mutation AddTransaction(
  $Amount: Long!
  $Date: Date
  $Rider: ID!
  $NewAmount: Long!
  $NewBalance: Long!
) {
  createTransaction(
    input: { data: { amount: $Amount, date: $Date, rider: $Rider } }
  ) {
    transaction {
      amount
      date
      rider {
        id
      }
    }
  }
  updateRider(
    input: {
      where: { id: $Rider }
      data: { amount_paid: $NewAmount, balance: $NewBalance }
    }
  ) {
    rider {
      id
      amount_paid
      balance
    }
  }
}
    `
 export default AddRiderTransaction;   