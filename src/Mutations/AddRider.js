import gql from "graphql-tag";

const AddRiderMutation = gql`
mutation AddRider($First_name:String!, $Last_name:String!, $Nin_number:String!, $Initial_deposit:Long!, $Initial_charge:Long!, $Phone_number:String!){
  createRider(input:{ data:{first_name:$First_name, last_name:$Last_name, nin_number:$Nin_number, initial_deposit:$Initial_deposit, initial_charge:$Initial_charge, phone_number:$Phone_number }}){
    rider{
      first_name
      last_name
      nin_number
      initial_deposit
      initial_charge
      phone_number
    }
  }
}

    `
    export default AddRiderMutation;