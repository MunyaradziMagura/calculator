import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ButtonTemplate({buttonValue, buttonVariant},props) {
  return (
    <Button size="lg" variant={`${buttonVariant}`}  style={{width: "100%"}}>{buttonValue}</Button>
  )
}
