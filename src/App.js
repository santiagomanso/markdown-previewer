import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container, FloatingLabel, Form, Row, Col } from 'react-bootstrap'

function App() {
  const [text, setText] = useState('')

  const handlerOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='app'>
      <Container>
        <Row>
          <h1 className='text-center mt-5 mb-3'>Convert your Markdown</h1>
        </Row>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId='floatingTextarea2'
              label='Write your markdown here'
            >
              <Form.Control
                as='textarea'
                id='editor'
                value={text}
                onChange={handlerOnChange}
                placeholder='Leave a comment here'
                style={{
                  height: '70vh',
                  resize: 'none',
                }}
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId='floatingTextarea2'
              label='Results in markdown'
            >
              <Form.Control
                as='textarea'
                id='preview'
                value={text}
                placeholder='Leave a comment here'
                disabled
                style={{
                  height: '70vh',
                  resize: 'none',
                  userSelect: 'none',
                }}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
