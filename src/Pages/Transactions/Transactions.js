import { useParams } from "react-router";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEdit, faTrashAlt, faEye, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {  Card, Col, Row, Form, Button, ButtonGroup, Breadcrumb, Pagination, Nav , Dropdown,Table} from '@themesberg/react-bootstrap';

import ViewTransactions_QUERY from "Queries/Transactions"
import Query from "Components/Query"

import moment from 'moment'

const Transactions = () => {
        return(
            <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                            <Breadcrumb.Item>Bajaj Kibanjampola</Breadcrumb.Item>
                            <Breadcrumb.Item active>Transactions</Breadcrumb.Item>
                        </Breadcrumb>
                        <h4>Transactions</h4>
                        <p className="mb-0">View your Transactions here.</p>
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
                    <Query query={ViewTransactions_QUERY} id={null}>
                        {({ data: { transactions }}) =>
                            {
                                return(
                                    <Table hover className="user-table align-items-center">
                                        <thead >
                                            <tr>
                                                <th className="border-bottom">First Name </th>
                                                <th className="border-bottom">Last Name</th>
                                                <th className="border-bottom">Amount</th>
                                                <th className="border-bottom">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.map((transactions,i) =>{
                                                return (
                                                <tr key={transactions}>
                                                    <td key={transactions.rider.first_name}> 
                                                        <span className="fw-normal">
                                                        {transactions.rider.first_name}
                                                        </span>
                                                    </td>
                                                    
                                                    <td key={transactions.rider.last_name}>
                                                        <span className="fw-normal"> 
                                                            {transactions.rider.last_name}
                                                        </span>
                                                    </td>
                                                    <td key={transactions.amount}>
                                                        <span className="fw-normal"> 
                                                            {transactions.amount}
                                                        </span>
                                                    </td>
                                                    <td key={transactions.date}>
                                                        <span className="fw-normal"> 
                                                            {moment(transactions.date).format('MMM Do YY')}
                                                        </span>
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
};

export default Transactions;