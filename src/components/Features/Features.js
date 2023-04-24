import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Features.css';

function Features() {
  return (
    <div className='features'>
        <Container className='container'>
        <div>
            <div className='button'>
        <Button variant="dark" size="lg">ChatGPT</Button>
        </div>
      {/* <h1 className='h2'>ChatGPT
      </h1> */}

<h4 className='h4'>Improved natural language processing:</h4>
<h5>My developers are constantly working to improve my ability to understand and interpret natural language.</h5>
<p>   </p>
<h5>This includes improving my ability to understand slang, idioms, and other forms of informal language.</h5>
<p>   </p>

<h4 className='h4'>Enhanced multitasking:</h4> <h5>I can now handle multiple tasks at the same time, allowing me to process more requests and provide faster responses to users.</h5>
<p>   </p>

<h4 className="h4">Integration with more platforms:</h4> <h5> I am now integrated with more platforms and applications, such as social media platforms and chatbots, making it easier for users to interact with me in various contexts.</h5>
<p>   </p>

<h4 className="h4">Expanded knowledge base:</h4> <h5> I have access to a larger and more diverse knowledge base, which allows me to answer a wider range of questions and provide more accurate information.</h5>
<p>   </p>

<h4 className="h4">Personalization:</h4> <h5> I can now personalize my responses based on the user's preferences and previous interactions with me, making the conversation more engaging and relevant to the user.</h5>
<p>   </p>

<h3>These are just a few examples of the many improvements that have been made to my capabilities. As technology continues to advance, I am sure that there will be many more exciting advancements to come!

</h3>
        
        </div>
        <Card className='card'>
      <Card.Body>
       
        <Nav.Item>
        <Nav.Link variant="success" href="/Chatbot"><Button variant='outline-success'>Try ChatGPT??</Button></Nav.Link>
      </Nav.Item>
      </Card.Body>
    </Card>
    </Container>
    </div>
  )
}

export default Features
