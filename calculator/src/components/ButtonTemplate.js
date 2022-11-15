import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ButtonTemplate({setResult,buttonValue, buttonVariant},props) {
  return (
    <Button size="lg" variant={`${buttonVariant}`} style={{width: "100%"}} onClick={() => setResult(buttonValue[0])}>{buttonValue}</Button>
  )
}
