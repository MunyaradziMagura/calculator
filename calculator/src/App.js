import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calculator from '../src/components/Calculator'
function App() {
  return (
    <Container>

      <Row>
        <Col><Calculator/></Col>
      </Row>
    </Container>
  );
}

export default App;
