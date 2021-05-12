import React from "react";
import { Image, Table } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {  Card, Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown,  Pagination, Nav } from '@themesberg/react-bootstrap';
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
                                    <thead>
                                        <tr>
                                            <th className="border-bottom">NiN Number</th>
                                            <th className="border-bottom">First Name</th>
                                            <th className="border-bottom">Last Name</th>
                                            <th className="border-bottom">Amount Owed</th>
                                            <th className="border-bottom">Amount Paid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {riders.map((riders,i) =>{
                                            return (
                                            <tr>
                                                <td key={riders.id}> 
                                                    <span className="fw-normal">
                                                        {riders.nin_number}
                                                    </span>
                                                </td>
                                                
                                                <td key={riders.id}>
                                                    <span className="fw-normal"> 
                                                        {riders.first_name}
                                                    </span>
                                                </td>
                                                <td key={riders.id}>
                                                    <span className="fw-normal"> 
                                                        {riders.last_name}
                                                    </span>
                                                </td>
                                                <td key={riders.id}> 
                                                    <span className="fw-normal">
                                                        {riders.amount_owed}
                                                    </span>
                                                </td>
                                                <td key={riders.id}>
                                                    <span className="fw-normal">
                                                        {riders.amount_paid}
                                                    </span>
                                                </td>
                                                <td  key={riders.id}>
                                                    <Link
                                                    to={`/riders/view-riders/${riders.id}`}
                                                    >Individual</Link>
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