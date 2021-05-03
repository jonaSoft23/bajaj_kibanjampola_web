import React from "react";
import { Image, Table } from '@themesberg/react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {  Card } from '@themesberg/react-bootstrap';
import ViewRiders_QUERY from "Queries/Riders"
import Query from "Components/Query"

const Riders = () => {
    return(
        <Card>
            <Query query={ViewRiders_QUERY} id={null}>
                {({ data: { riders }}) =>
                    {
                        return(
                            <Table responsive className="align-items-center table-flush">
                                <thead>
                                    <tr>
                                        <th className="border-0">NiN Number</th>
                                        <th className="border-0">First Name</th>
                                        <th className="border-0">Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riders.map((riders,i) =>{
                                        return (
                                        <tr>
                                            <td key={riders.id}> {riders.nin_number}</td>
                                            <td key={riders.id}> {riders.first_name}</td>
                                            <td key={riders.id}> {riders.last_name}</td>
                                            <td key={riders.id}> {riders.last_name}</td>
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
        </Card>
    );
}

export default Riders;