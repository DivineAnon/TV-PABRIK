import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table
} from "reactstrap";
import { HorizontalBar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

import axios from 'axios';
import moment from "moment";
import Loader from "react-loaders";
import Slider from "react-slick";
import CountUp from "react-countup";

export default class RakitCluster10 extends Component {
    constructor() {
        super();
    
        this.state = {
          itemPerfomances: [],
          chartDataPoin: {},
          itemRakits: [],
          itemPBs: [],
          itemPolesRangkas: [],
          itemPolesBrjs: [],
          chartDataBRJ: {},
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

      async getDataPerfomance(){
        // const url = 'http://localhost:8090/api/ranking-coba1';
        const urlprod = 'http://103.247.217.10:8091/api/ranking-cluster-22';
        const res = await axios.get(urlprod);
        // console.log(res.data);
        this.setState({itemPerfomances: res.data, DataisLoaded: true});
      }

      async getDataPoin(){
        // const url = 'http://localhost:8090/api/poin-coba2';
        const urlprod = 'http://103.247.217.10:8091/api/poin-cluster-22';
        await axios.get(urlprod)
        .then(res => {
            const poins = res.data;
            let labels = [];
            let data = [];
            poins.forEach(element => {
                labels.push(element.vf_nama_tukang);
                data.push(element.vf_actual);
            })
            console.log(labels[0]);
            console.log(data);
            this.setState({
                chartDataPoin: {
                    labels: ["Rakit", "Poles Rangka", "Pasang Batu", "Poles BRJ"],
                    datasets: 
                    [                        
                        {
                            label: labels,
                            data: data,
                            fill: true,
                            backgroundColor: "rgba(67,194,245,1)",
                            borderColor: "rgba(75,192,192,1)",
                        },                 
                        {
                            label: labels,
                            data: data,
                            fill: true,
                            backgroundColor: "rgba(255,192,0,1)",
                            borderColor: "#742774",
                        },                 
                        {
                            label: labels,
                            data: data,
                            fill: true,
                            backgroundColor: "rgba(69,234,160,1)",
                            borderColor: "rgba(75,192,192,1)",
                        },
                    ]
                },
                DataisLoaded: true
            })
        });
        // console.log(this.state.chartDataPoin);
        // this.setState({items: res.data, DataisLoaded: true});
      }

      async getDataRakit(){
        // const url = 'http://localhost:8090/api/data-rakit-coba3';
        const urlprod = 'http://103.247.217.10:8091/api/data-rakit-cluster-22';
        const res = await axios.get(urlprod);
        // console.log(res.data);
        this.setState({itemRakits: res.data, DataisLoaded: true});
      }

      async getDataPolesRangka(){
        // const url = 'http://localhost:8090/api/data-poles-rangka-coba4';
        const urlprod = 'http://103.247.217.10:8091/api/data-poles-rangka-cluster-22';
        const res = await axios.get(urlprod);
        // console.log(res.data);
        this.setState({itemPolesRangkas: res.data, DataisLoaded: true});
      }

      async getDataPasangBatu(){
        // const url = 'http://localhost:8090/api/data-pasang-batu-coba5';
        const urlprod = 'http://103.247.217.10:8091/api/data-pasang-batu-cluster-22';
        const res = await axios.get(urlprod);
        // console.log(res.data);
        this.setState({itemPBs: res.data, DataisLoaded: true});
      }

      async getDataPolesBRJ(){
        // const url = 'http://localhost:8090/api/data-poles-brj-coba6';
        const urlprod = 'http://103.247.217.10:8091/api/data-poles-brj-cluster-22';
        const res = await axios.get(urlprod);
        // console.log(res.data);
        this.setState({itemPolesBrjs: res.data, DataisLoaded: true});
      }

      async getBRJ(){
        // const url = 'http://localhost:8090/api/brj-coba7';
        const urlprod = 'http://103.247.217.10:8091/api/brj-cluster-22';
        await axios.get(urlprod)
        .then(res => {
            const brj = res.data;
            let dates = [];
            let targets = [];
            let data = [];
            brj.forEach(element => {
                dates.push(element.m_tanggal)
                targets.push(element.m_target);
                data.push(element.m_pcs);
            })
            // console.log(brj);
            this.setState({
                chartDataBRJ: {
                    labels: dates,
                    datasets: [
                        {
                            label: "TARGET",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(30,144,255,0.2)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: "round",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            pointBorderColor: "rgba(30,144,255,0.2)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(30,144,255,0.2)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: targets,
                        },
                        {
                            label: "BRJ",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,140,0,0.6)",
                            borderColor: "rgba(255,255,255,1)",
                            borderCapStyle: "round",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            pointBorderColor: "rgba(255,140,0,0.6)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(255,140,0,0.6)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: data,
                        }
                    ]
                },
                DataisLoaded: true
            })
        });
      }

      componentDidMount(){
        this.getDataPerfomance();
        this.getBRJ();
        this.getDataPoin();
        this.getDataPasangBatu();
        this.getDataPolesBRJ();
        this.getDataPolesRangka();
        this.getDataRakit();
      }

    render(){
        const {DataisLoaded} = this.state;
        let settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplaySpeed: 60000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  infinite: true,
                  dots: true,
                },
              },
            ],
          };
        
        if(DataisLoaded){
        return(
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <Container fluid>
                        <div className="card no-shadow bg-transparent no-border rm-borders">
                            <Slider {...settings}>
                                <div className="slider-item">                      
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>BEST PERFOMANCE CLUSTER 2.2</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h5 className="text-center" style={{color:'black'}}>UPDATE : {moment().format("DD MMM, YYYY HH:mm:ss")}</h5> 
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop: 100}}>
                                        {this.state.itemPerfomances.map((itemPerfomance) => ( 
                                        <Col lg="3" md="3" sm="12">
                                            <Card className={itemPerfomance.vf_proses == "RAKIT_REP" ? "card-shadow-secondary border bg-happy-green text-white" : itemPerfomance.vf_proses == "PB" ? "card-shadow-secondary border bg-arielle-smile text-white" : itemPerfomance.vf_proses == "POLESRK" ? "card-shadow-secondary border bg-sunny-morning text-white" : "card-shadow-secondary border bg-mixed-hopes text-white"} outline color="secondary">
                                                <CardHeader>
                                                    <h1 className="text-center">{itemPerfomance.vf_proses == "RAKIT_REP" ? "RAKIT REPARASI" : itemPerfomance.vf_proses == "PB" ? "PASANG BATU" : itemPerfomance.vf_proses == "POLESRK" ? "POLES RANGKA" : "POLES BRJ"}</h1>
                                                </CardHeader>
                                                <CardBody>
                                                    <center><img src={itemPerfomance.vf_foto == null ? 'https://myapps.cmk.co.id/hrd/image/'+itemPerfomance.vf_tukang+'.jpg' : itemPerfomance.vf_foto == "" ? 'https://myapps.cmk.co.id/hrd/image/'+itemPerfomance.vf_tukang+'.jpg' : 'https://myapps.cmk.co.id/hrd/image/'+itemPerfomance.vf_foto} alt={itemPerfomance.vf_foto == "" ? itemPerfomance.vf_tukang : itemPerfomance.vf_foto == null ? itemPerfomance.vf_tukang : itemPerfomance.vf_foto} style={{height:104, width:125}} /></center>
                                                    <h4 className="text-center">{itemPerfomance.vf_tukang}</h4>
                                                    <h4 className="text-center">{itemPerfomance.vf_nama_tukang}</h4>
                                                </CardBody>
                                                <CardFooter>
                                                    <h4 className="text-center"><CountUp start={0} end={itemPerfomance.vf_performance} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></h4>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                        ))}
                                    </Row>
                                </div>  
                                <div className="slider-item">                      
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>Poin Harian</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            {/* <Card className="mt-3"> */}
                                                <HorizontalBar data={this.state.chartDataPoin} width={1400} height={540} options={
                                                    {
                                                        maintainAspectRatio: true, 
                                                        scales: {
                                                            yAxes: [{
                                                                gridLines: {
                                                                    display: false
                                                                }
                                                            }],
                                                            xAxes: [{
                                                                gridLines: {
                                                                    display: false
                                                                }
                                                            }]
                                                        },
                                                        legend: {
                                                            position: 'right',
                                                        }
                                                    }
                                                }/>
                                            {/* </Card> */}
                                        </Col>                                        
                                    </Row>
                                </div> 
                                <div className="slider-item">                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>Pencapaian Poin Rakit</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            {/* <Card className="mt-3"> */}
                                                {/* <CardBody>        */}
                                                <Table responsive className="mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th style={{
                                                            border: '1px solid white',
                                                            background: 'rgb(67, 194, 245)',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            }}>Cluster</th>
                                                            <th style={{
                                                            border: '1px solid white',
                                                            background: 'rgb(67, 194, 245)',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            }}>Proses</th>
                                                            <th style={{
                                                            border: '1px solid white',
                                                            background: 'rgb(67, 194, 245)',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            }}>Nama</th>
                                                            <th style={{
                                                            border: '1px solid white',
                                                            background: 'rgb(67, 194, 245)',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            }}>Total Poin</th>
                                                            <th style={{
                                                            border: '1px solid white',
                                                            background: 'rgb(67, 194, 245)',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            }}>Pencapaian</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.itemRakits.map((itemRakit) => (
                                                        <tr>
                                                            <th scope="row">{itemRakit.vf_cluster}</th>
                                                            <td>{itemRakit.vf_proses}</td>
                                                            <td>{itemRakit.vf_nama_tukang}</td>
                                                            <td>{itemRakit.vf_actual}</td>
                                                            <td><CountUp start={0} end={itemRakit.vf_performance} separator="," decimals={1} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></td>
                                                        </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                                {/* </CardBody> */}
                                            {/* </Card> */}
                                        </Col>
                                    </Row>
                                </div>
                                <div className="slider-item">                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>Pencapaian Poin Poles Rangka</h1>
                                        </Col>
                                    </Row>                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">                                                  
                                            <Table responsive className="mb-0">
                                                <thead>
                                                    <tr>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(250,105,105)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Cluster</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(250,105,105)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Proses</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(250,105,105)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Nama</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(250,105,105)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Total Poin</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(250,105,105)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Pencapaian</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.itemPolesRangkas.map((itemPolesRangka) => (
                                                        <tr>
                                                            <th scope="row">{itemPolesRangka.vf_cluster}</th>
                                                            <td>{itemPolesRangka.vf_proses}</td>
                                                            <td>{itemPolesRangka.vf_nama_tukang}</td>
                                                            <td>{itemPolesRangka.vf_actual}</td>
                                                            <td><CountUp start={0} end={itemPolesRangka.vf_performance} separator="," decimals={1} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="slider-item">                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>Pencapaian Poin Pasang Batu</h1>
                                        </Col>
                                    </Row>                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12"> 
                                            <Table responsive className="mb-0">
                                                <thead>
                                                <tr>
                                                    <th style={{
                                                    border: '1px solid white',
                                                    background: 'rgb(246,195,12)',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    }}>Cluster</th>
                                                    <th style={{
                                                    border: '1px solid white',
                                                    background: 'rgb(246,195,12)',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    }}>Proses</th>
                                                    <th style={{
                                                    border: '1px solid white',
                                                    background: 'rgb(246,195,12)',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    }}>Nama</th>
                                                    <th style={{
                                                    border: '1px solid white',
                                                    background: 'rgb(246,195,12)',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    }}>Total Poin</th>
                                                    <th style={{
                                                    border: '1px solid white',
                                                    background: 'rgb(246,195,12)',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    }}>Pencapaian</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.itemPBs.map((itemPB) => (
                                                    <tr>
                                                        <th scope="row">{itemPB.vf_cluster}</th>
                                                        <td>{itemPB.vf_proses}</td>
                                                        <td>{itemPB.vf_nama_tukang}</td>
                                                        <td>{itemPB.vf_actual}</td>
                                                        <td><CountUp start={0} end={itemPB.vf_performance} separator="," decimals={1} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="slider-item">                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>Pencapaian Poin Poles BRJ</h1>
                                        </Col>
                                    </Row>                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <Table responsive className="mb-0">
                                                <thead>
                                                <tr>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(69,234,160)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Cluster</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(69,234,160)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Proses</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(69,234,160)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Nama</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(69,234,160)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Total Poin</th>
                                                        <th style={{
                                                        border: '1px solid white',
                                                        background: 'rgb(69,234,160)',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        }}>Pencapaian</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.itemPolesBrjs.map((itemPolesBrj) => (
                                                    <tr>
                                                        <th scope="row">{itemPolesBrj.vf_cluster}</th>
                                                        <td>{itemPolesBrj.vf_proses}</td>
                                                        <td>{itemPolesBrj.vf_nama_tukang}</td>
                                                        <td>{itemPolesBrj.vf_actual}</td>
                                                        <td><CountUp start={0} end={itemPolesBrj.vf_performance} separator="," decimals={1} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="slider-item">                                                         
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h1 className="text-center" style={{color:'black'}}>BRJ Bulanan CLUSTER 2.2</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <h5 className="text-center" style={{color:'black'}}>UPDATE : {moment().format("DD MMM, YYYY HH:mm:ss")}</h5> 
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            {/* <Card className="mt-3"> */}
                                                <Line data={this.state.chartDataBRJ} width={1400} height={500} options={
                                                    {
                                                        maintainAspectRatio: true, 
                                                        scales: {
                                                            yAxes: [{
                                                                gridLines: {
                                                                    display: true
                                                                }
                                                            }],
                                                            xAxes: [{
                                                                gridLines: {
                                                                    display: false
                                                                }
                                                            }]
                                                        },
                                                        legend: {
                                                            position: 'bottom'
                                                        }
                                                    }
                                                }/>                                                
                                            {/* </Card> */}
                                        </Col>   
                                    </Row>
                                </div>
                            </Slider>
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