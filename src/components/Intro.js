import { Col, Container, Row, Button } from 'react-bootstrap'

const intro = () => {
return (
    <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col> 
            <div className='title'>Welcome to Sydney+.</div>
            <div className='title'>ENJOY THE MOVIE!!!</div>
            <div className='introButton mt-4 text-center'> 
            <Button variant="dark">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
)
}

export default intro