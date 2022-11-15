import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonTemplate from './ButtonTemplate'
export default function Calculator() {
    const buttonsList = [
    {"1":"primary"},
    {"2":"primary"},
    {"3":"primary"},
    {"4":"primary"},
    {"5":"primary"},
    {"6":"primary"},
    {"7":"primary"},
    {"8":"primary"},
    {"9":"primary"},
    {"0":"primary"},
    {"+":"info"},
    {"-":"info"},
    {"÷":"info"},
    {".": "info"},
    {"AC":"warning"},
    {"=": "success"}
    ]


  return (
   <div style={{ maxInlineSize: "22rem", borderRadius: "10px", overflow: "hidden" }}>
   {/* output  */}
      <Row>
        <h1 style={{ fontSize: "2rem"}} className="text-align-end">Result</h1>
      </Row>
      {/* buttons */}
      <Row>
        {buttonsList.map((myButton, index) => (
            <Col xs>
            <ButtonTemplate buttonValue={Object.keys(myButton)} buttonVariant={Object.values(myButton)}/>
            </Col>
        ))}
      </Row>
   </div>
  )
}