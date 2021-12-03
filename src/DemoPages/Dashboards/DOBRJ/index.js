import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import {
    Row,
    Col,
    CardHeader,
    Container,
    CardBody,
    Card,
    Input,
    Button,
} from "reactstrap";

import Select from "react-select";
import ReactTable from "react-table";
import axios from 'axios';
import Loader from "react-loaders";

import FormDatePicker6 from "../../Forms/Components/DatePicker/Examples/example6";

import { makeData } from "../../Tables/DataTables/Examples/utils";

const options = [
    { value: "1", label: "Today" },
    { value: "2", label: "Last Week" },
    { value: "3", label: "Last 30 Days" },
    { value: "4", label: "Last 3 Months" },
    { value: "5", label: "Last Year" },
];

export default class DOBRJDashboard extends Component {
    constructor() {
        super();
    
        this.state = {
          data: makeData(),
          dropdownOpen: false,
          items: [],
        };
        this.toggle = this.toggle.bind(this);
      }
    
      state = {
        selectedOption: null,
      };
    
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
      };
    
      toggle() {
        this.setState((prevState) => ({
          dropdownOpen: !prevState.dropdownOpen,
        }));
      }

      async getDataDOBRJ(){
        const url = 'http://localhost:8090/api/dobrj';
        // const urlprod = 'https://service-myapps.loca.lt/api/dobrj';
        const res = await axios.get(url);
        // console.log(res.data);
        this.setState({items: res.data,DataisLoaded: true});
      }

      componentDidMount(){
          this.getDataDOBRJ();
      }

    render(){
        const { selectedOption } = this.state;
        const {DataisLoaded} = this.state;
        const columns = [
            {
              columns: [
                {  
                  Header: 'Keterangan',  
                  accessor: 'vf_nama' ,
                },
                {  
                  Header: 'Qty',  
                  accessor: 'vf_qty' ,
                },
                {  
                  Header: 'Berat Gross',  
                  accessor: 'vf_berat_gross' ,
                },
                {  
                  Header: 'Berat Nett',  
                  accessor: 'vf_berat_nett' ,
                },
                {  
                  Header: 'Ongkos NO',  
                  accessor: 'vf_ongkos_no',
                },
                {  
                  Header: 'Ongkos RO',  
                  accessor: 'vf_ongkos_ro' ,
                },
                {  
                  Header: 'Ongkos PB',  
                  accessor: 'vf_ongkos_pb' ,
                },
                {  
                  Header: 'Ongkos FIN',  
                  accessor: 'vf_ongkos_fin' ,
                },
                {  
                  Header: 'Ongkos LL',  
                  accessor: 'vf_ongkos_lain' ,
                },
                {  
                  Header: 'Ongkos SETTING',  
                  accessor: 'vf_ongkos_setting' ,
                },
                {  
                  Header: 'Total Ongkos',  
                  accessor: 'vf_total' ,
                },
                {  
                  Header: 'Butir',  
                  accessor: 'vf_butir' ,
                },
                {  
                  Header: 'Carat',  
                  accessor: 'vf_carat' ,
                },
                {  
                  Header: 'Average Delivery Time',  
                  accessor: 'vf_delivery_time' ,
                },
                {  
                  Header: 'Target BRJ',  
                  accessor: 'vf_target_bulan' ,
                },
                {  
                  Header: 'Average BRJ',  
                  accessor: 'vf_pencapaian_brj' ,
                },
                {  
                  Header: 'Total First Pass',  
                  accessor: 'vf_first_pass' ,
                },
                {  
                  Header: 'First Pass QC',  
                  accessor: 'vf_first_pass_qc' ,
                },
              ],
            },
          ];
        
        if(DataisLoaded){
        return(
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <PageTitle heading="Report DOBRJ"
                        subheading=""
                        icon="pe-7s-display1 icon-gradient bg-premium-dark"/>
                    <Container fluid>
                        <Row>
                            <Col md="12" lg="12">
                                <Card className="main-card mb-3">                                    
                                    <CardHeader>
                                        <FormDatePicker6 />                                        
                                        <span className="d-inline-block ml-2" style={{ width:  120, marginTop: 13}}>
                                            <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'shift'}/>
                                        </span>
                                    </CardHeader>
                                    <CardBody>                                
                                    <div className="btn-actions-pane-right text-capitalize">
                                        <Row>                                            
                                            <Col md="3" sm="3">
                                                <span className="d-inline-block ml-2" style={{ width: 125 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'cluster ppic'}/>
                                                </span>
                                                <span className="d-inline-block ml-2" style={{ width: 92 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'proses'}/>
                                                </span>
                                                <span className="d-inline-block ml-2" style={{ width: 138 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'nama tukang'}/>
                                                </span> 
                                            </Col>
                                            <Col md="3" sm="3">
                                                <span className="d-inline-block ml-2" style={{ width: 87 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'brand'}/>
                                                </span> 
                                                <span className="d-inline-block ml-2" style={{ width: 89 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'status'}/>
                                                </span>                                                                         
                                                <span className="d-inline-block ml-2" style={{ width: 110 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'group by'}/>
                                                </span>  
                                            </Col>
                                            <Col md="3" sm="3">                                                                        
                                                <span className="d-inline-block ml-2" style={{ width: 110 }}>
                                                    <Select value={selectedOption} onChange={this.handleChange} options={options} placeholder={'no'}/>
                                                </span>                               
                                                <span className="d-inline-block ml-2" style={{ width: 150 }}>   
                                                    <Input type="text" name="email" id="exampleEmail" placeholder="search text"/>
                                                </span>                                    
                                                <span className="d-inline-block ml-2">                                
                                                <Button outline className="mb-2 btn-outline-2x" color="success">
                                                    Retrieve
                                                </Button>
                                                </span>
                                            </Col>
                                            <Col md="3" sm="3">        
                                                <span className="d-inline-block ml-2">                                
                                                <Button outline className="mb-2 btn-outline-2x" color="secondary">
                                                    <i className="lnr-download btn-icon-wrapper"> </i>
                                                    Export To Excel
                                                </Button>
                                                </span>       
                                                <span className="d-inline-block ml-2">                                
                                                <Button outline className="mb-2 btn-outline-2x" color="secondary">
                                                    <i className="lnr-download btn-icon-wrapper"> </i>
                                                    Export SAP
                                                </Button>
                                                </span>       
                                                <span className="d-inline-block ml-2">                                
                                                <Button outline className="mb-2 btn-outline-2x" color="secondary">
                                                    <i className="lnr-download btn-icon-wrapper"> </i>
                                                    Export Consumption SAP
                                                </Button>
                                                </span>
                                            </Col>
                                        </Row>
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <div  className="card no-shadow bg-transparent no-border rm-borders mb-3">
                        <Row>
                          <Col md="12">
                            <Card className="main-card mb-3">
                              <CardHeader className="rm-border pb-0 responsive-center">
                                <div>
                                  <h5 className="menu-header-title text-capitalize">
                                    Data Rekap DOBRJ
                                  </h5>
                                </div>
                              </CardHeader>
                              <CardBody>
                                <ReactTable data={this.state.items}
                                  columns={columns}
                                  defaultPageSize={10}
                                  className="-striped -highlight"
                                />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </div>
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
                    <PageTitle heading="Report DOBRJ"
                        subheading=""
                        icon="pe-7s-display1 icon-gradient bg-premium-dark"/>
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