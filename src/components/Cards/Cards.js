import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
// import MyImage from './components/MyImage/OpenAI.png'
function Cards() {

  return (
    <div>
        <Card>
      <Card.Body>
        <Card.Title>ChatGPT</Card.Title>
        <Card.Text>
        ChatGPT is an AI chatbot that uses natural language processing to create humanlike 
        conversational dialogue. The language model can respond to questions and compose 
        various written content, including articles, social media posts, essays, code and emails.
        </Card.Text>
        <Button variant="dark">Try ChatGPT??</Button>
      </Card.Body>
    </Card>
    {/* <div>
        <img src={MyImage}/>
    </div> */}
    </div>
  );
}

export default Cards
