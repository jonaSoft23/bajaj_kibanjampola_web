
import{React }from "react";
import { useParams,useHistory  } from "react-router";

import { useMutation, useQuery} from "@apollo/react-hooks";
import AddRiderTransaction from "Mutations/AddRiderTransaction";
import SingleRider_QUERY from "Queries/SingleRider";
import LastTransaction from "Components/LastTransaction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faCashRegister} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, ButtonGroup, Breadcrumb,  Form, Card} from '@themesberg/react-bootstrap';
import Progress from "Components/Progress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChoosePhotoWidget, CounterWidget } from "../Components/Widgets";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import UserIcon from "../assets/img/user.jpg";

const validate = Yup.object({
    amount: Yup.string()
      .required("required"),      
    date: Yup.string()
      .required("required"), 
})



const Individual = () => {

    let { id } = useParams();
    const history = useHistory();
    let PaidPercentage = 0;
    let CurrentBalance;
    let CurrentAmount;
    let Total_Charge;
    let FirstName;
    let LastName;
    let Days;
    let ImageUrl;

    const makeString = (text) =>{
        var CommaString;
        CommaString = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return(CommaString)
    }  

    Days = LastTransaction(id);

    const {loading, error, data} = useQuery(SingleRider_QUERY,{
        variables:{Id:id}
       }); 
        if (data){
        CurrentBalance = data.rider.balance;
        CurrentAmount = data.rider.amount_paid;
        FirstName = data.rider.first_name;
        LastName = data.rider.last_name;
        Total_Charge = data.rider.initial_charge;
        CurrentBalance = makeString(CurrentBalance);    
        try{
            ImageUrl = process.env.REACT_APP_BACKEND_URL + data.rider.profile_image.url;
            console.log(ImageUrl)
        }
        catch(err){
            console.log("no profile image")
        }


        // setCurrentBalance(data.rider.balance);
        console.log(JSON.stringify(data, null, 2));
        }
        if (error) {
        console.log('error: ', error)
        }

    const CalculatePaidPercentage = (paid, owed) =>{
        let Percentage;
        Percentage = (paid / owed)* 100;
        return (Math.round(Percentage));
    }

    try{

        PaidPercentage = CalculatePaidPercentage(CurrentAmount,Total_Charge);
        console.log(PaidPercentage);
    }
    catch(err){
        console.log("no value received");
    }

    const formik = useFormik({

        initialValues: {
            amount: '',
            date: '',    
        },
        validationSchema : validate,
            // handleSubmit: 
            onSubmit: values => {
            alert("Transaction added Succesfully");
            
            //re-render page after form submission
            history.go(0)
          },
    });

    const makeInt = (text) =>{
        var number;
        text = text.replace(/[^\d\.\-]/g, "");
        number = parseInt(text);
        return(number)
      }
      

    const Amount = makeInt(formik.values.amount);
    const Date = formik.values.date;
    const Rider = id;
    let NewAmount = CurrentAmount + Amount;
    let NewBalance = CurrentBalance - Amount;

    const [createTransaction] = useMutation( AddRiderTransaction,{
        variables:{Amount, Date, Rider, NewAmount, NewBalance}
    })

    if (error) {
        console.log('error: ', error)
      }


    return(
    <>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Bajaj Kibanjampola</Breadcrumb.Item>
                        <Breadcrumb.Item >Riders</Breadcrumb.Item>
                        <Breadcrumb.Item active >{FirstName + "  " + LastName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>{FirstName + "  " + LastName}</h4>
                    <p className="mb-0">View individual's  rider details here.</p>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <Button variant="outline-primary" size="sm">Share</Button>
                        <Button variant="outline-primary" size="sm">Export</Button>
                    </ButtonGroup>
                </div>
        </div>
        {/* breadcrumb ends */}

        <Row>
            <Col xs={12} xl={8}>
                <Row className="justify-content-md-center">
                        <Col xs={12} sm={6}  className="mb-4">
                            <CounterWidget
                                category="Balance (Ugx)"
                                title= {CurrentBalance}
                                //   {CurrentBalanceStr ? CurrentBalanceStr :"Not loaded yet" }
                                period="Feb 1 - Apr 1"
                                icon={faChartLine}
                                iconColor="shape-secondary"
                            />
                        </Col>

                        <Col xs={12} sm={6}  className="mb-4">
                            <CounterWidget
                                category="Days since last Transaction"
                                title={Days}
                                period="Feb 1 - Apr 1"
                                percentage={28.4}
                                icon={faCashRegister}
                                iconColor="shape-tertiary"
                            />
                        </Col>
                </Row> 

                <Row>
                    <Col xs={12}>
                        <Card border="light" className="bg-white shadow-sm mb-4">
                            <Card.Body>
                                <Progress variant="secondary" label="Payement Progress" value={PaidPercentage} />
                            </Card.Body>                            
                        </Card>
                    </Col>
                </Row>  

                <Row>
                    <Col xs={12}>
                        <Card border="light" className="bg-white shadow-sm mb-4">              
                            <Card.Body>
                                <h5 className="mb-4">Transaction Details</h5>
                                <Form onSubmit={formik.handleSubmit} >
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Group id="amount"  >
                                                <Form.Label>Amount</Form.Label>
                                                <Form.Control 
                                                name="amount" 
                                                required 
                                                type="text" 
                                                placeholder="Enter Amount" 
                                                // value={formik.initialValues.amount} 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} />
                                                {formik.touched.amount && formik.errors.amount
                                                    ? <div>{formik.errors.amount}</div>
                                                    : null}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Form.Group id="date"  >
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control 
                                                required 
                                                type="date" 
                                                name="date"
                                                placeholder="yyyy-mm-dd" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} />
                                                {formik.touched.date && formik.errors.date
                                                ? <div>{formik.errors.date}</div>
                                                : null}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="mt-3">
                                        <Button variant="primary" type="submit" onClick={ createTransaction}  >Add Transaction</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>                                 
            </Col>

            <Col xs={12} xl={4}>
                <Row>
                    <Col xs={12}>
                        <Card border="light" className="text-center p-0 mb-4">
                        <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
                            <Card.Body className="pb-5">
                                <Card.Img src={ImageUrl ? ImageUrl : UserIcon}
                                 alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
                                <Card.Title>{FirstName + "  " + LastName}</Card.Title>
                                <Card.Subtitle className="fw-normal">Rider</Card.Subtitle>
                                <Card.Text className="text-gray mb-4">Kamapla, Uganda</Card.Text>
                            </Card.Body>
                            </Card>
                    </Col>
                    <Col xs={12}>
                    <ChoosePhotoWidget
                        title="Select profile photo"
                        photo={Profile3}
                    />
                    </Col>
                </Row>
            </Col>
        </Row>

    </>
    );
}
export default Individual;