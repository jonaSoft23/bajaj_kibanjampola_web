
import { useQuery} from "@apollo/react-hooks";
import moment from 'moment'
import ViewLastTransaction_Query from "Queries/ViewLastTransaction";

const LastTransaction = (id) => {
      //   id  = useParams();
      let last_transaction_date;
      let last_transaction_days;
      const today = moment()
      
   //  console.log(id);
  
    const {loading, error, data} = useQuery(ViewLastTransaction_Query,{
        variables:{Id:id}
       }); 
         if (loading){
             console.log("loading")
         }         
         if (data){
            try {
                  // if(typeof(data.transactions[0].date)!== 'undefined')
                  last_transaction_date = data.transactions[0].date;
            }catch (err){
               console.log("an error happened")
            }
         }
         if(error){
            console.log(JSON.stringify(error, null, 2));
         }

            last_transaction_date = moment(last_transaction_date, 'YYYY-MM-DD');
            console.log(today)
            last_transaction_days = today.diff(last_transaction_date, 'days');
         

    return(last_transaction_days)
}

export default LastTransaction;