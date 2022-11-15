import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ButtonTemplate from './ButtonTemplate'
export default function Calculator() {
    const [result, setResult] = useState("0");
    const [operationState, setOperationState] = useState(false)
    // function to handle calculations
    function handelCalculation(userValue){
        switch(userValue){
            case "+":
                if(operationState === false){
                    setResult(result + userValue)
                    setOperationState(userValue)
                }
                break;

            case "-":
                if(operationState === false){
                    setResult(result + userValue)
                    setOperationState(userValue)
                }
                break;

            case "÷":
                if(operationState === false){
                    setResult(result + userValue)
                    setOperationState(userValue)
                }
                break;

            case "*":
                if(operationState === false){
                    setResult(result + userValue)
                    setOperationState(userValue)
                }
                break;

            case "AC":
                setOperationState(false)
                setResult("0")
                break;

            case "=":
                const varibles = result.split(operationState).map((e) => e === '' ? "0" : e)
                setResult(initiateCalculation(varibles[0], varibles[1]))
                break;
            default:
                setResult(result + userValue)
        }
        
    }

    function initiateCalculation(value1, value2){

        switch(operationState){
            case "+":
                return Number(value1) + Number(value2)
            case "-":
                return Number(value1)- Number(value2)
            case "÷":
                return Number(value1) / Number(value2)
            case "*":
                return Number(value1) * Number(value2)
        }
    }
    // store all buttons
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
    {"*": "info"},
    {"AC":"warning"},
    {"=": "success"}
    ]


  return (
   <div style={{ maxInlineSize: "22rem", borderRadius: "10px", overflow: "hidden" }}>
   {/* output  */}
      <Row>
        <h1 style={{ fontSize: "2rem", backgroundColor: "gray"}} className="text-align-end">{result}</h1>
      </Row>
      {/* buttons */}
      <Row>
        {buttonsList.map((myButton, index) => (
            <Col xs>
             <ButtonTemplate setResult={handelCalculation} buttonValue={Object.keys(myButton)} buttonVariant={Object.values(myButton)}/>
            </Col>
        ))}
      </Row>
   </div>
  )
}