import React, { Fragment, Component } from "react";
import Slider from "react-slick";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import axios from 'axios';
import CountUp from "react-countup";

export default class Responsive extends Component {
  constructor(){
    super();

    this.state = {
      fotos1: [],
      fotos2: [],
      fotos3: [],
    }
  }

  async getRankingAll(){
    const url = 'http://localhost:8090/api/ranking-all';
    // const urlprod = 'https://service-myapps.loca.lt/api/ranking-all';
    const res = await axios.get(url);
    // console.log(res.data);
    this.setState({fotos1: res.data});
  }

  async getRankingPB(){
    const url = 'http://localhost:8090/api/ranking-pb';
    // const urlprod = 'https://service-myapps.loca.lt/api/ranking-pb';
    const res = await axios.get(url);
    // console.log(res.data);
    this.setState({fotos2: res.data});
  }

  async getRankingRakit(){
    const url = 'http://localhost:8090/api/ranking-rakit';
    // const urlprod = 'https://service-myapps.loca.lt/api/ranking-rakit';
    const res = await axios.get(url);
    // console.log(res.data);
    this.setState({fotos3: res.data});
  }

  componentDidMount(){  
    this.getRankingAll();
    this.getRankingPB();
    this.getRankingRakit();
  }

  render() {
    let settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplaySpeed: 60000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Slider {...settings}>
          <div>
            {/* <h5 style={{textAlign:"center"}}>All Proses</h5> */}
            <div className="slider-item" style={{height:400}}>
              <Row>
                {this.state.fotos1.map((foto1) => ( 
                <Col sm="12" md="2">
                  <Card body className="card-shadow-secondary border bg-happy-green text-white mb-3" outline color="secondary">
                    <CardHeader><img src={'https://myapps.cmk.co.id/hrd/image/'+foto1.vf_tukang+'.jpg'} alt='' style={{height:104, width:125}} /></CardHeader>
                    <CardBody>
                      <h6 style={{textAlign:"center"}}>{foto1.vf_cluster}</h6>
                      <h6 style={{textAlign:"center"}}>{foto1.vf_proses}</h6>
                      <h6 style={{textAlign:"center"}}>{foto1.vf_tukang}</h6>
                      <h6 style={{textAlign:"center"}}>{foto1.vf_nama_tukang}</h6>
                      <h6 style={{textAlign:"center"}}><CountUp start={0} end={foto1.vf_actual} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></h6>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Col>
                ))}
              </Row>
            </div>
          </div>
          <div>
            {/* <h5 style={{textAlign:"center"}}>Rakit Poles</h5> */}
            <div className="slider-item">
              <Row>                
                {this.state.fotos2.map((foto2) => ( 
                <Col sm="12" md="2">
                  <Card body className="card-shadow-secondary border bg-arielle-smile text-white mb-3" outline color="secondary">
                  <CardHeader><img src={'https://myapps.cmk.co.id/hrd/image/'+foto2.vf_tukang+'.jpg'} alt='' style={{height:104, width:125}}/></CardHeader>
                    <CardBody>
                      <h6 style={{textAlign:"center"}}>{foto2.vf_cluster}</h6>
                      <h6 style={{textAlign:"center"}}>{foto2.vf_proses}</h6>
                      <h6 style={{textAlign:"center"}}>{foto2.vf_tukang}</h6>
                      <h6 style={{textAlign:"center"}}>{foto2.vf_nama_tukang}</h6>
                      <h6 style={{textAlign:"center"}}><CountUp start={0} end={foto2.vf_actual} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></h6>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Col>                
                ))}
              </Row>
            </div>
          </div>
          <div>
            {/* <h5 style={{textAlign:"center"}}>Pasang Batu</h5> */}
            <div className="slider-item">
              <Row>
                {this.state.fotos3.map((foto3) => ( 
                <Col sm="12" md="2">
                  <Card body className="card-shadow-secondary border bg-night-fade text-white mb-3" outline color="secondary">
                  <CardHeader><img src={'https://myapps.cmk.co.id/hrd/image/'+foto3.vf_tukang+'.jpg'} alt='' style={{height:104, width:125}}/></CardHeader>
                    <CardBody>
                      <h6 style={{textAlign:"center"}}>{foto3.vf_cluster}</h6>
                      <h6 style={{textAlign:"center"}}>{foto3.vf_proses}</h6>
                      <h6 style={{textAlign:"center"}}>{foto3.vf_tukang}</h6>
                      <h6 style={{textAlign:"center"}}>{foto3.vf_nama_tukang}</h6>
                      <h6 style={{textAlign:"center"}}><CountUp start={0} end={foto3.vf_actual} separator="," decimals={0} decimal="." prefix="" useEasing={false} suffix="%" duration="0"/></h6>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Col>              
                ))}
              </Row>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
