import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import MyImage from './components/MyImage/chatgpt.png';
function Dashboard() {
  return (
    <div>
        <Container>
      <h1 className='h2'> Introducing OpenAI's - ChatGPT  </h1>
          <h4 className='para'>We’ve trained a model called ChatGPT which interacts in a conversational way.
            The dialogue format makes it possible for ChatGPT to answer followup questions,
            admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</h4>
            {/* <div>
            <img className='image' src={MyImage} />
          </div> */}
          {/* <Card className='card'>
      <Card.Body>
       
        <Nav.Item>
        <Nav.Link variant="success" href="/Chatbot"><Button variant='success'>Try ChatGPT??</Button></Nav.Link>
      </Nav.Item>
      </Card.Body>
    </Card> */}
    </Container>
    </div>
    
  )
}

export default Dashboard
