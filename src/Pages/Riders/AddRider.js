
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory  } from "react-router";

import AddRiderMutation from "Mutations/AddRider"

import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCommentDots, faFileAlt, faPlus, faRocket, faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown , Form, Card, ButtonGroup, Breadcrumb} from '@themesberg/react-bootstrap';

import { useFormik } from "formik";
import * as Yup from "yup";


const validate = Yup.object({
    first_name: Yup.string()
      .required("required"),      
    last_name: Yup.string()
      .required("required"),
    nin_number: Yup.string()
      .required("required")
      .min(14, "NIN number must not be less than 14 characters")   
      .max(14, "NIN number must not be more than  14 characters"),   
    initial_charge: Yup.string()
      .required("required"),   
    initial_deposit: Yup.string()
      .required("required"),   
    phone_number: Yup.string()
      .required("required")
      .min(10, "Phone number must  not be less than 10 characters")   
      .max(10, "Phone number must not be more than 10 characters"),  
})

const AddRider = () => {

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
        first_name: '',
        last_name: '',
        nin_number: '',
        initial_deposit: '',
        initial_charge: '',
        phone_number: ''

    },
    validationSchema : validate,

    onSubmit: Values => {

      alert("Rider added Succesfully");     
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

    const First_name = formik.values.first_name;
    const Last_name = formik.values.last_name;
    const Nin_number = formik.values.nin_number;
    const Initial_deposit = makeInt(formik.values.initial_deposit);
    const Initial_charge = makeInt(formik.values.initial_charge);
    const Phone_number =formik.values.phone_number;
    const Balance = Initial_charge - Initial_deposit;
    const Amount_paid = Initial_deposit;

    const [createRider] = useMutation( AddRiderMutation,{
        variables:{First_name, Last_name, Nin_number, Initial_deposit, Initial_charge ,Phone_number, Balance, Amount_paid}
    })


    return(
    <>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Bajaj Kibanjampola</Breadcrumb.Item>
                        <Breadcrumb.Item >Riders</Breadcrumb.Item>
                        <Breadcrumb.Item active>Add Rider</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Add rider</h4>
                    <p className="mb-0">Register a new rider here.</p>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <Button variant="outline-primary" size="sm">Share</Button>
                        <Button variant="outline-primary" size="sm">Export</Button>
                    </ButtonGroup>
                </div>
        </div>


      {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              <span>New</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div> */}

        <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
            <h5 className="mb-4">General information</h5>
            <Form onSubmit={formik.handleSubmit} >
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="firstName"  >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                      name="first_name" 
                      required 
                      type="text" 
                      placeholder="Enter your first name" 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.first_name && formik.errors.first_name
                          ? <div>{formik.errors.first_name}</div>
                          : null}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="lastName"  >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                      required 
                      type="text" 
                      name="last_name"
                      placeholder="Also your last name" 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.first_name && formik.errors.first_name
                      ? <div>{formik.errors.first_name}</div>
                      : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="nin-number" >
                    <Form.Label>NIN</Form.Label>
                      <Form.Control 
                      required 
                      type="text" 
                      name="nin_number" 
                      placeholder="Enter a valid NIN number" 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.nin_number && formik.errors.nin_number
                      ? <div font-color="red">{formik.errors.nin_number}</div>
                      : null}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="phone" >
                    <Form.Label>Phone</Form.Label>
                      <Form.Control 
                      required 
                      type="text" 
                      placeholder="0702 678 910" 
                      name="phone_number" 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.phone_number && formik.errors.phone_number
                      ? <div>{formik.errors.phone_number}</div>
                      : null}
                  </Form.Group>
                </Col>
              </Row>
              <h5 className="my-4">Account Details</h5>
              <Row>
                <Col sm={4}>
                  <Form.Group id="Initial Charge" >
                    <Form.Label>Initial Charge</Form.Label>
                      <Form.Control 
                      required type="number" 
                      name="initial_charge" 
                      type="text"
                      placeholder="Initial Charge"   
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.initial_charge && formik.errors.initial_charge
                      ? <div>{formik.errors.initial_charge}</div>
                      : null}
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group id="Initial Deposit">
                      <Form.Label>Initial Deposit</Form.Label>
                      <Form.Control 
                      required 
                      type="number" 
                      name="initial_deposit" 
                      type="text"
                      placeholder="input initial amount" 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                      {formik.touched.initial_deposit && formik.errors.initial_deposit
                      ? <div>{formik.errors.initial_deposit}</div>
                      : null}
                  </Form.Group>
                  </Col>
              </Row>

              <div className="mt-3">
                  <Button variant="primary" type="submit" onClick={createRider}  >Save All</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>

        
    </>    
);

}

export default AddRider;