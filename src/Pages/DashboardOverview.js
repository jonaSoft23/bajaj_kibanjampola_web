
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloudUploadAlt, faPlus, faTasks, faUserShield, faChartLine, faCashRegister , faUser } from '@fortawesome/free-solid-svg-icons';
import {  Row, Button, Dropdown, ButtonGroup, Col } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../Components/Widgets";
import { PageVisitsTable } from "../Components/Tables";
import { trafficShares, totalOrders } from "../data/charts";
import { pageVisits  } from "../data/tables";

import ViewRiders_QUERY from "Queries/Riders"
import Query from "Components/Query"
import { useMutation, useQuery} from "@apollo/react-hooks";

export default () => {

let totalNumberOfRiders;
let accountSum;
let amountOwed;
let totalTransactions;

const makeString = (text) =>{
  var CommaString;
  CommaString = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return(CommaString)
}  

const {loading, data , error }= useQuery(ViewRiders_QUERY);
if (data){
  try{
  totalNumberOfRiders = data.riders.length;
  accountSum = data.riders.reduce((n,{amount_paid}) => n + amount_paid, 0);
  accountSum = makeString(accountSum);
  amountOwed = data.riders.reduce((n,{balance}) => n + balance, 0);
  amountOwed =makeString(amountOwed);
  totalTransactions = data.transactions.length;
  console.log(totalTransactions);
  }
  catch(err){
    totalNumberOfRiders = 0;
  }
}

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>

        <Row className="justify-content-md-center">
          <Col xs={12} className="mb-4 d-none d-sm-block">
            <SalesValueWidget
              title="Sales Value"
              value="10,567"
              percentage={10.57}
            />
          </Col>
          <Col xs={12} className="mb-4 d-sm-none">
            <SalesValueWidgetPhone
              title="Sales Value"
              value="10,567"
              percentage={10.57}
            />
          </Col>
          <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
              category="Riders"
              title={totalNumberOfRiders}
              period="Feb 1 - Apr 1"
              // percentage={18.2}
              icon={faUser}
              iconColor="shape-secondary"
            />
          </Col>

          <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
              category="Revenue(Ugx)"
              title= {accountSum}
              period="Feb 1 - Apr 1"
              percentage={28.4}
              icon={faCashRegister}
              iconColor="shape-tertiary"
            />
          </Col>

          <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
              category="Amount Owed"
              title= {amountOwed}
              period="Feb 1 - Apr 1"
              percentage={28.4}
              icon={faCashRegister}
              iconColor="shape-tertiary"
            />
          </Col>
        </Row> 

         <Row>
          <Col xs={12} xl={12} className="mb-4">
            <Row>
              <Col xs={12} xl={8} className="mb-4">
                <Row>
                  <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                  </Col>

                  <Col xs={12} lg={12} className="mb-4">
                    <TeamMembersWidget />
                  </Col>
{/* 
                  <Col xs={12} lg={6} className="mb-4">
                    <ProgressTrackWidget />
                  </Col> */}
                </Row>
              </Col>

              <Col xs={12} xl={4}>
                <Row>
                  <Col xs={12} className="mb-4">
                    <BarChartWidget
                      title="Total Transactions"
                      value={  totalTransactions }
                      percentage={18.2}
                      data={totalOrders} />
                  </Col>

                  {/* <Col xs={12} className="px-0 mb-4">
                    <RankingWidget />
                  </Col> */}

                  <Col xs={12} className="px-0">
                    <AcquisitionWidget />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
    </>
  );
};
