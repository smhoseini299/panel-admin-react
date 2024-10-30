import React, { useEffect} from "react";
import Card from "./Card";
import TableDashboard from "./TableDashboard";
import DashbordChart from "../../utils/DashbordChart";

const Dashboard = () => {
    
    useEffect(() => {
      
    }, []);

    return (
        <div>
            <div id="dashboard_section" className="dashboard_section main_section">
                <div className="row">
                    <Card/>
                </div>
                <div className="row">
                    <TableDashboard/>
                    <div className="col-12 col-lg-6">
                       <DashbordChart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
