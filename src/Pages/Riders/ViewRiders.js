import React from "react";
// import {  Table } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEdit, faTrashAlt, faEye, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {  Card, Col, Row, Form, Button, ButtonGroup, Breadcrumb, Pagination, Nav , Dropdown,Table} from '@themesberg/react-bootstrap';
import ViewRiders_QUERY from "Queries/Riders"
import Query from "Components/Query"
import {Link } from "react-router-dom"

const ViewRiders = () => {
    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Bajaj Kibanjampola</Breadcrumb.Item>
                        <Breadcrumb.Item active>Riders</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Riders</h4>
                    <p className="mb-0">View your registered riders here.</p>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <Button variant="outline-primary" size="sm">Share</Button>
                        <Button variant="outline-primary" size="sm">Export</Button>
                    </ButtonGroup>
                </div>
            </div>

            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                <Card.Body className="pt-0">
                <Query query={ViewRiders_QUERY} id={null}>
                    {({ data: { riders }}) =>
                        {
                            return(
                                <Table hover className="user-table align-items-center">
                                    <thead >
                                        <tr>
                                            <th className="border-bottom">NiN Number</th>
                                            <th className="border-bottom">First Name</th>
                                            <th className="border-bottom">Last Name</th>
                                            <th className="border-bottom">Amount Owed</th>
                                            <th className="border-bottom">Amount Paid</th>
                                            <th className="border-bottom">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {riders.map((riders,i) =>{
                                            return (
                                            <tr key={riders}>
                                                <td key={riders.nin_number}> 
                                                    <span className="fw-normal">
                                                        {riders.nin_number}
                                                    </span>
                                                </td>
                                                
                                                <td key={riders.first_name}>
                                                    <span className="fw-normal"> 
                                                        {riders.first_name}
                                                    </span>
                                                </td>
                                                <td key={riders.last_name}>
                                                    <span className="fw-normal"> 
                                                        {riders.last_name}
                                                    </span>
                                                </td>
                                                <td key={riders.balance}> 
                                                    <span className="fw-normal">
                                                        {riders.balance}
                                                    </span>
                                                </td>
                                                <td key={riders.amount}>
                                                    <span className="fw-normal">
                                                        {riders.amount_paid}
                                                    </span>
                                                </td>
                                                <td  key={riders.id}>
                                                <Dropdown as={ButtonGroup}>
                                                    <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                                                    <span className="icon icon-sm">
                                                        <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                                                    </span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>
                                                            <FontAwesomeIcon icon={faEye} className="me-2" />  
                                                            <Link to={`/riders/view-riders/${riders.id}`}>View Details</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item className="text-danger">
                                                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </td>
                                            </tr>   
                                            );
                                        } )
                                        }
                                    </tbody>
                                </Table>
                            );
                        }
                    }
                </Query>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                    <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                        <Pagination.Prev>
                            Previous
                        </Pagination.Prev>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item>4</Pagination.Item>
                        <Pagination.Item>5</Pagination.Item>
                        <Pagination.Next>
                            Next
                        </Pagination.Next>
                        </Pagination>
                    </Nav>
                    <small className="fw-bold">
                        Showing <b>3</b> out of <b>25</b> entries
                    </small>
                </Card.Footer>
                </ Card.Body>   
           </Card>
        </>    
    );
}

export default ViewRiders;