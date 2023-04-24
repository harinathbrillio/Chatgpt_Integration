import './App.css';
import Chatbot from './components/Chatbot/Chatbot';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login/login';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MyImage from './components/MyImage/chatgpt.png';
import Cards from './components/Cards/Cards';
import Dashboard from './components/Dashboard/Dashboard';
import Features from './components/Features/Features';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className='App_header'>
          <Header />

          <h1 className='title'>Introducing ChatGPT  </h1>
          <p className='para'>We’ve trained a model called ChatGPT which interacts in a conversational way.
            The dialogue format makes it possible for ChatGPT to answer followup questions,
            admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>

          <div>
            <img className='image' src={MyImage} />
          </div>
          <div>
            <Cards />
          </div>
          <Footer />
          {/* <Router>

          </Router> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard}> <div className='dashboard'><h1 className='h1'>Introducing ChatGPT</h1>
            <img className='image' src={MyImage} />
          </div><h2 className='h1'>Developed By OpenAI</h2>
            <h4 className='h4'>We’ve trained a model called ChatGPT which interacts in a conversational way. </h4>
            <h4 className='h4'> The dialogue format makes it possible for ChatGPT to answer followup questions, 
            admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
            </h4>
            <h4 className='h4'>ChatGPT is a language model created by OpenAI. I was trained on a large dataset of text from the internet,
               including books, articles, and websites. My purpose is to generate human-like responses to text-based questions and prompts.</h4>
            <h4 className='h4'>OpenAI is an artificial intelligence research lab that was founded in 2015. Its mission is to create advanced AI systems that benefit humanity as a whole.</h4>
              <h4 className='h4'> OpenAI conducts research in a variety of areas, including natural language processing, computer vision, robotics, and reinforcement learning.</h4>
            <h4 className='h4'>In addition to creating language models like myself, OpenAI has also developed other cutting-edge AI technologies, such as GPT-3</h4>
            <h4 className='h4'>OpenAI is also committed to advancing the field of AI in a responsible and ethical way, and has developed a set of principles for ethical AI development.</h4>
            <div>
              <Card className='card'>
                <Card.Body>

                  <Nav.Item>
                    <Nav.Link variant="success" href="/Chatbot"><Button variant='outline-success'>Try ChatGPT??</Button></Nav.Link>
                  </Nav.Item>
                </Card.Body>
              </Card>
            </div>
          </Route>
          <Route exact path="/features" component={Features} />
          <Route exact path="/Chatbot" component={Chatbot} />
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
