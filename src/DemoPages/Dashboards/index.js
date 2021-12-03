import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS
// import DOBRJDashboard from "./DOBRJ";
// import PerfomanceDashboard from "./Perfomance";
import RakitCluster10  from "./RakitCluster1.0";
import RakitCluster21  from "./RakitCluster2.1";
// import TestDashboard from "./Test";
// import AnalyticsDashboard from "./Analytics/";
// import SalesDashboard from "./Sales/";
// import CommerceDashboard from "./Commerce/";
// import CRMDashboard from "./CRM/";
// import MinimalDashboard1 from "./Minimal/Variation1";
// import MinimalDashboard2 from "./Minimal/Variation2";

// Layout
// import AppHeader from "../../Layout/AppHeader/";
// import AppSidebar from "../../Layout/AppSidebar/";
// import AppFooter from "../../Layout/AppFooter/";

// Theme Options
// import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    {/* <ThemeOptions /> */}
    {/* <AppHeader /> */}
    <div className="app-main">
      {/* <AppSidebar /> */}
      <div className="app-main__outer">
      {/* <Route path={`${match.url}/perfomance`} component={PerfomanceDashboard}/> */}
      {/* <Route path={`${match.url}/dobrj`} component={DOBRJDashboard}/> */}
      <Route path={`${match.url}/rakit-cluster-10`} component={RakitCluster10}/>
      <Route path={`${match.url}/rakit-cluster-21`} component={RakitCluster21}/>
        {/* <div className="app-main__inner"> */}
          {/* <Route path={`${match.url}/dobrj`} component={DOBRJDashboard}/> */}
          {/* <Route path={`${match.url}/test`} component={TestDashboard}/>
          <Route path={`${match.url}/analytics`} component={AnalyticsDashboard}/>
          <Route path={`${match.url}/sales`} component={SalesDashboard} />
          <Route path={`${match.url}/commerce`} component={CommerceDashboard} />
          <Route path={`${match.url}/crm`} component={CRMDashboard} /> */}
          {/* <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/> */}
        {/* </div> */}
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
