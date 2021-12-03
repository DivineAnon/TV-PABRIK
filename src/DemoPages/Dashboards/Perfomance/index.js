import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import PageTitle from "../../../Layout/AppMain/PageTitle";
import {
    // Row,
    // Col,
    // Button,
    // CardHeader,
    Container,
    // Card,
    // CardBody,
    // Input,
} from "reactstrap";

import axios from 'axios';
// import NumberFormat from 'react-number-format';

// import FormDatePicker6 from "../../Forms/Components/DatePicker/Examples/example6";
import Responsive from "DemoPages/Components/Carousel/Examples/Slideshow/Responsive";

// import Select from "react-select";
// import ReactTable from "react-table";
// import _ from "lodash";
// import {
//   faAngleUp,
//   faAngleDown,
// } from "@fortawesome/free-solid-svg-icons";

// import CountUp from "react-countup";
import Loader from "react-loaders";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeData } from "../../Tables/DataTables/Examples/utils";

// const options = [
//     { value: "1", label: "Today" },
//     { value: "2", label: "Last Week" },
//     { value: "3", label: "Last 30 Days" },
//     { value: "4", label: "Last 3 Months" },
//     { value: "5", label: "Last Year" },
// ];

export default class PerfomanceDashboard extends Component {
    constructor() {
        super();
    
        this.state = {
          data: makeData(),
          dropdownOpen: false,
          items: [],
          summaries: [],
        };
        this.toggle = this.toggle.bind(this);
      }
    
      // state = {
      //   selectedOption: null,
      // };
    
      // handleChange = (selectedOption) => {
      //   this.setState({ selectedOption });
      // };
    
      toggle() {
        this.setState((prevState) => ({
          dropdownOpen: !prevState.dropdownOpen,
        }));
      }
      
      async getDataPerfomance(){
        const url = 'http://localhost:8090/api/orders'
        // const urlprod = 'https://service-myapps.loca.lt/api/orders';
        const res = await axios.get(url);
        // console.log(res.data);
        this.setState({items: res.data,DataisLoaded: true});
      }
      
      async getDataSummary(){        
        const url = 'http://localhost:8090/api/summary'
        // const urlprod = 'https://service-myapps.loca.lt/api/summary';
        const res = await axios.get(url);
        // console.log(res.data);
        this.setState({summaries: res.data,DataisLoaded: true});
      }

      componentDidMount(){
        // fetch('http://localhost:8090/api/orders')
        // .then(res => res.json())
        // .then(testing => {
        //   this.setState({
        //       items: testing,
        //       DataisLoaded: true
        //   });
        // });
        // console.log(this.state.items);
        this.getDataPerfomance();        
        this.getDataSummary();
      }

    render(){
        // const { data} = this.state;
        // const { selectedOption } = this.state;
        const {DataisLoaded} = this.state;
        // const columns = [
        //   {
        //     columns: [
        //       // {
        //       //   Header: "No.",
        //       //   accessor: "No.",
        //       // },
        //       {  
        //         Header: 'Cluster',  
        //         accessor: 'vf_cluster' ,
        //       },
        //       {  
        //         Header: 'Proses',  
        //         accessor: 'vf_proses' ,
        //       },
        //       {  
        //         Header: 'NIK',  
        //         accessor: 'vf_tukang' ,
        //       },
        //       {  
        //         Header: 'Nama Tukang',  
        //         accessor: 'vf_nama_tukang' ,
        //       },
        //       {  
        //         Header: 'Pencapaian BRJ (%)',  
        //         accessor: 'vf_persen_brj',
        //       },
        //       {  
        //         Header: 'Target Poin',  
        //         accessor: 'vf_target' ,
        //       },
        //       {  
        //         Header: 'Actual Poin',  
        //         accessor: 'vf_actual' ,
        //       },
        //       {  
        //         Header: 'Total Perfomance',  
        //         accessor: 'vf_performance' ,
        //       },
        //       {  
        //         Header: 'Total Pcs / Butir',  
        //         accessor: 'vf_total_pcs' ,
        //       },
        //     ],
        //   },
        // ];

        if(DataisLoaded){
        return(
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    {/* <PageTitle heading="Perfomance Monitoring"
                        subheading=""
                        icon="pe-7s-display1 icon-gradient bg-premium-dark"/> */}
                    <Container fluid>
                      {/* <Row>
                        <Col md="12" lg="12">
                          <Card className="main-card mb-3">
                            <CardHeader>
                              <FormDatePicker6 />
                            </CardHeader>
                            <CardBody>
                              <div className="btn-actions-pane-right text-capitalize">
                                <Row>                                            
                                    <Col md="3" sm="3" style={{marginRight: -53}}>
                                        <span className="d-inline-block ml-2" style={{ width: 95 }}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'cluster'}/>
                                        </span>
                                        <span className="d-inline-block ml-2" style={{ width: 92 }}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'proses'}/>
                                        </span>
                                    </Col>
                                    <Col md="3" sm="3" style={{marginRight: -13}}>
                                        <span className="d-inline-block ml-2" style={{ width: 138 }}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'nama tukang'}/>
                                        </span> 
                                        <span className="d-inline-block ml-2" style={{ width: 89 }}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'status'}/>
                                        </span>
                                    </Col>
                                    <Col md="3" sm="3">                                                                          
                                        <span className="d-inline-block ml-2" style={{ width: 110 }}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'group by'}/>
                                        </span>                                
                                        <span className="d-inline-block ml-2" style={{ width: 150 }}>   
                                            <Input type="text" name="email" id="exampleEmail" placeholder="search text"/>
                                        </span>
                                    </Col>
                                    <Col md="3" sm="3" style={{marginLeft: 20, top: 2}}>                                            
                                        <span className="d-inline-block ml-2">                                
                                        <Button outline className="mb-2 btn-outline-2x" color="success">
                                            Retrieve
                                        </Button>
                                        </span>
                                        <span className="d-inline-block ml-2">                                
                                        <Button outline className="mb-2 btn-outline-2x" color="secondary">
                                            <i className="lnr-download btn-icon-wrapper"> </i>
                                            Export To Excel
                                        </Button>
                                        </span>
                                    </Col>
                                </Row>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row> */}
                      {/* <div className="card no-shadow bg-transparent no-border rm-borders mb-3">
                        <Card>
                          <CardHeader className="rm-border pb-0 responsive-center">
                            <div>
                              <h5 className="menu-header-title text-capitalize">
                                Summary Perfomance
                              </h5>
                            </div>
                          </CardHeader>                          
                          {this.state.summaries.map((summary) =>(
                          <Row>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading">Total Poin</div>
                                  <div className="widget-numbers text-primary">
                                    <CountUp start={0} end={summary.vf_total_poin} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="" duration="10"/>
                                  </div>
                                  <div className="widget-description text-focus">
                                    Increased by
                                    <span className="text-warning pl-1">
                                      <FontAwesomeIcon icon={faAngleUp} />
                                      <span className="pl-1">7.35%</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading">Total Pcs</div>
                                  <div className="widget-numbers text-warning">
                                    <CountUp start={0} end={summary.vf_total_qty} separator="," decimals={0} decimal=","
                                      prefix="" useEasing={false} suffix="" duration="10"/>
                                  </div>
                                  <div className="widget-description opacity-8 text-focus">
                                    Down by
                                    <span className="text-success pl-1 pr-1">
                                      <FontAwesomeIcon icon={faAngleDown} />
                                      <span className="pl-1">21.8%</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading">Total Butir</div>
                                  <div className="widget-numbers text-success">
                                    <CountUp start={0} end={summary.vf_total_butir} separator="," decimals={0} decimal=","
                                      prefix="" useEasing={false} suffix="" duration="10"/>
                                  </div>
                                  <div className="widget-description opacity-8 text-focus">
                                    Down by
                                    <span className="text-success pl-1 pr-1">
                                      <FontAwesomeIcon icon={faAngleDown} />
                                      <span className="pl-1">21.8%</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>                           
                          ))}                           
                          {this.state.summaries.map((summary) =>(                        
                          <Row>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading">Total Tukang Mencapai</div>
                                  <div className="widget-numbers text-secondary">
                                    <CountUp start={0} end={summary.vf_tukang_achieve} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="" duration="10"/>
                                  </div>
                                  <div className="widget-description text-focus">
                                    Increased by
                                    <span className="text-warning pl-1">
                                      <FontAwesomeIcon icon={faAngleUp} />
                                      <span className="pl-1">7.35%</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading"></div>
                                  <div className="widget-numbers text-success">
                                  </div>
                                  <div className="widget-description opacity-8 text-focus">
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm="12" md="4">
                              <div className="widget-chart">
                                <div className="widget-chart-content">
                                  <div className="widget-subheading">Total Tukang Tidak Mencapai</div>
                                  <div className="widget-numbers text-danger">
                                    <CountUp start={0} end={summary.vf_tukang_noachieve} separator="," decimals={0} decimal=","
                                      prefix="" useEasing={false} suffix="" duration="10"/>
                                  </div>
                                  <div className="widget-description opacity-8 text-focus">
                                    Down by
                                    <span className="text-success pl-1 pr-1">
                                      <FontAwesomeIcon icon={faAngleDown} />
                                      <span className="pl-1">21.8%</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        ))}
                        </Card>
                      </div> */}
                      <div className="card no-shadow bg-transparent no-border rm-borders">                    
                              <Responsive />
                        {/* <Card> */}
                          {/* <CardHeader className="rm-border pb-0 responsive-center">
                              <h5 className="menu-header-title text-capitalize">
                                Best Perfomance
                              </h5>
                          </CardHeader> */}
                          {/* <CardBody>              
                          </CardBody>
                        </Card> */}
                      </div>
                      {/* <div  className="card no-shadow bg-transparent no-border rm-borders mb-3">
                        <Row>
                          <Col md="12">
                            <Card className="main-card mb-3">
                              <CardHeader className="rm-border pb-0 responsive-center">
                                <div>
                                  <h5 className="menu-header-title text-capitalize">
                                    Data Perfomance Monitoring
                                  </h5>
                                </div>
                              </CardHeader>
                              <CardBody>
                                <ReactTable data={this.state.items}
                                  columns={columns}
                                  defaultPageSize={10}
                                  className="-striped -highlight"
                                  // SubComponent={(row) => {
                                  //   return (
                                  //     <div style={{ padding: "20px" }}>
                                  //       <ReactTable data={this.state.items} columns={columns} defaultPageSize={3}
                                  //         showPagination={false}
                                  //       />
                                  //     </div>
                                  //   );
                                  // }}
                                />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </div> */}
                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        )
        }
        else{
            return(
              <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    {/* <PageTitle heading="Perfomance Monitoring"
                        subheading=""
                        icon="pe-7s-display1 icon-gradient bg-premium-dark"/> */}
                    <Container fluid>
                      <div className="font-icon-wrapper float-left mr-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader color="#3f6ad8" type="ball-pulse" />
                        </div>
                      </div>
                    </Container>
                </CSSTransitionGroup>
              </Fragment>
            )
        }
    }
}