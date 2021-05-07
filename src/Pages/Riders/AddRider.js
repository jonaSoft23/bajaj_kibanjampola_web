
import React, {useReducer} from "react";
import { useMutation } from "@apollo/react-hooks";

import AddRiderMutation from "Mutations/AddRider"

import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown , Form, Card} from '@themesberg/react-bootstrap';

import { useFormik } from "formik";
import * as Yup from "yup";


const validate = Yup.object({
    first_name: Yup.string()
      .required("required"),      
    last_name: Yup.string()
      .required("required"),
    nin_number: Yup.string()
      .required("required")
      .min(14, "NIN number must be 14 characters")   
      .max(14, "NIN number must be 14 characters"),   
    initial_charge: Yup.string()
      .required("required"),   
    initial_deposit: Yup.string()
      .required("required"),   
    phone_number: Yup.string()
      .required("required")
      .min(10, "Phone number must be 10 characters")   
      .max(10, "Phone number must be 10 characters"),  
})

const AddRider = () => {

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

    // onSubmit: values => {

    //   alert(JSON.stringify(values, null, 2));

    // },

  });

      const First_name = formik.values.first_name;
      const Last_name = formik.values.last_name;
      const Nin_number =formik.values.nin_number;
      const Initial_deposit = formik.values.initial_deposit;
      const Initial_charge = formik.values.initial_charge;
      const Phone_number =formik.values.phone_number;


    const [createRider] = useMutation( AddRiderMutation,{
        variables:{First_name, Last_name, Nin_number,  Initial_deposit, Initial_charge ,Phone_number, }
    })

    {console.log(First_name)}

    return(
    <>

<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
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

        {/* <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
              <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Products
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faStore} className="me-2" /> Customers
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCartArrowDown} className="me-2" /> Orders
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faChartPie} className="me-2" /> Console
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>

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
                    // value={formik.initialValues.first_name} 
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
            {/* <Row className="align-items-center">
                <Col md={6} className="mb-3">
                <Form.Group id="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="0">
                    <option value="0">Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row> */}
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

            {/*
            <h5 className="my-4">Address</h5>
             <Row>
                <Col sm={9} className="mb-3">
                <Form.Group id="address" value={userInput.address} onChange={handleChange} >
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your home address" />
                </Form.Group>
                </Col>
                <Col sm={3} className="mb-3">
                <Form.Group id="addressNumber" value={userInput.phone_number}  onChange={handleChange} >
                    <Form.Label>Number</Form.Label>
                    <Form.Control required type="number" placeholder="No." />
                </Form.Group>
                </Col>
            </Row> */}
            {/* <Row>
                <Col sm={4} className="mb-3">
                <Form.Group id="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control required type="text" placeholder="City" />
                </Form.Group>
                </Col>
                <Col sm={4}>
                <Form.Group id="zip">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control required type="tel" placeholder="ZIP" />
                </Form.Group>
                </Col>
            </Row> */}

            <h5 className="my-4">Account Details</h5>
            <Row>
                <Col sm={4}>
                <Form.Group id="Initial Charge" >
                    <Form.Label>Initial Charge</Form.Label>
                    <Form.Control 
                    required type="number" 
                    name="initial_charge" 
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