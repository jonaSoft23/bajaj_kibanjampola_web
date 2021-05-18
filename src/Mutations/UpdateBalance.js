import gql from "graphql-tag";

const UpdateBalance = gql`
mutation UpdateBalance ($Id:ID!, $NewAmount:Long!, $NewBalance:Long!){
    updateRider(input:{ 
      where: {
        id: $Id
      },
      data:{amount_paid:$NewAmount, balance:$NewBalance}}){
      rider{
        id
        amount_paid
        balance
      }
  }
  }
    `

    export default UpdateBalance;