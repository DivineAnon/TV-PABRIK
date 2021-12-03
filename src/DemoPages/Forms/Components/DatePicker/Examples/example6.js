import React, { Fragment } from "react";

import {
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
  Form,
  Col,
  Row,
} from "reactstrap";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";
// import moment from 'moment';

class FormDatePicker6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }

  render() {
    const disableWeekends = current => {
      return current.day() !== 0 && current.day() !== 6;
    }
    return (
      <Fragment>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail" className="mr-sm-2">
                  From
                </Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                  </InputGroupAddon>
                  <DatePicker selected={this.state.startDate} className="form-control" onChange={this.handleChangeStart} isValidDate={disableWeekends}/>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword" className="mr-sm-2">
                  S / D
                </Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                  </InputGroupAddon>
                  <DatePicker selected={this.state.endDate} className="form-control" onChange={this.handleChangeEnd} isValidDate={disableWeekends}/>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

export default FormDatePicker6;
