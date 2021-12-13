import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS
// import DOBRJDashboard from "./DOBRJ";
// import PerfomanceDashboard from "./Perfomance";
import RakitCluster10  from "./RakitCluster1.0";
import RakitCluster21  from "./RakitCluster2.1";
import RakitCluster22  from "./RakitCluster2.2";
import RakitCluster23  from "./RakitCluster2.3";
import RakitCluster24  from "./RakitCluster2.4";
import RakitCluster25  from "./RakitCluster2.5";
import RakitCluster26  from "./RakitCluster2.6";
import RakitCluster27  from "./RakitCluster2.7";
import RakitCluster31  from "./RakitCluster3.1";
import RakitCluster32  from "./RakitCluster3.2";
import RakitCluster33  from "./RakitCluster3.3";
import RakitCluster34  from "./RakitCluster3.4";
import RakitCluster35  from "./RakitCluster3.5";
import RakitCluster41  from "./RakitCluster4.1";
import RakitCluster42  from "./RakitCluster4.2";
import RakitCluster43  from "./RakitCluster4.3";
import RakitCluster44  from "./RakitCluster4.4";
import RakitCluster45  from "./RakitCluster4.5";
import RakitCluster46  from "./RakitCluster4.6";
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
      <Route path={`${match.url}/cluster-10`} component={RakitCluster10}/>
      <Route path={`${match.url}/cluster-21`} component={RakitCluster21}/>
      <Route path={`${match.url}/cluster-22`} component={RakitCluster22}/>
      <Route path={`${match.url}/cluster-23`} component={RakitCluster23}/>
      <Route path={`${match.url}/cluster-24`} component={RakitCluster24}/>
      <Route path={`${match.url}/cluster-25`} component={RakitCluster25}/>
      <Route path={`${match.url}/cluster-26`} component={RakitCluster26}/>
      <Route path={`${match.url}/cluster-27`} component={RakitCluster27}/>
      <Route path={`${match.url}/cluster-31`} component={RakitCluster31}/>
      <Route path={`${match.url}/cluster-32`} component={RakitCluster32}/>
      <Route path={`${match.url}/cluster-33`} component={RakitCluster33}/>
      <Route path={`${match.url}/cluster-34`} component={RakitCluster34}/>
      <Route path={`${match.url}/cluster-35`} component={RakitCluster35}/>
      <Route path={`${match.url}/cluster-41`} component={RakitCluster41}/>
      <Route path={`${match.url}/cluster-42`} component={RakitCluster42}/>
      <Route path={`${match.url}/cluster-43`} component={RakitCluster43}/>
      <Route path={`${match.url}/cluster-44`} component={RakitCluster44}/>
      <Route path={`${match.url}/cluster-45`} component={RakitCluster45}/>
      <Route path={`${match.url}/cluster-46`} component={RakitCluster46}/>
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
