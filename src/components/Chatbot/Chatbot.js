import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Container, Row, Form, Spinner } from 'react-bootstrap';
import { Configuration } from 'openai'
import { useState } from 'react';


//Parameters For ChatGPT API
const PARAMS = {
  temperature : 0.5,
  max_tokens: 256,
}

//Configuration For API Key in .env File
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY
})

//Usestate Hooks
function Chatbot() {
  const[questionType, setQuestionType] = useState('general')
  const[cbRespose, setCbResponse] = useState('')
  const[userInput, setUserInput] = useState('')
  const[isLoading, setIsLoading] = useState(false)

  
  const getInstructions = (qt, input)=>{
      let prompt;
      switch(qt){
        case 'general':
          prompt = input;
          break;
          /**
        case 'translate':
          prompt = `translate this text to Spanish:${input}`
          break;
        case 'weather' :
          prompt =`if the question is related to weather =answer : ${input}, else can't answer this`
          break; */
          default:
            prompt = input

      }
      return prompt
  }

  //Handling POST Data
  const handleSendData = async(e) => { 
    e.preventDefault()

    //Loading Spinner After Submission
    setIsLoading(true)
    
    const prompt = getInstructions(questionType, userInput)

    //Endpoint URL From Chatgpt
    const endpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const body = {...PARAMS, prompt}

    //Posting Data And Fetching URL
    const response = await fetch(endpoint ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${configuration.apiKey}`,
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    console.log(data)
    setCbResponse(data.choices[0].text)
    setIsLoading(false)
  }

  return (

        //React-Bootstrap

        <Container className='mt-3'>
          <Row className='mt-3'>
            {['Hi I am Chatbot, Ask Me Anything'].map(el=>{
              return(
                <Col key={el}>
                  <Button varient="primary" onClick={()=>setQuestionType(el)}>{el}</Button>
                </Col>
              )
            }) }
          </Row>
          {/* <h3 className='my-3'>QuestionType: <b>{questionType}</b></h3> */}
       
          <Form onSubmit={handleSendData}>
            <Form.Control
            type='text'
            value={userInput}
            onChange={e=>setUserInput(e.target.value)}
            />
            <Button variant='info' type='submit' className='mt-3'>
            submit
          </Button>
          </Form>
          <div className='mt-3'>
            {isLoading ? 
          <Spinner/>  
          :
          cbRespose ? cbRespose :'No Questions Asked'
          }

          </div>
      </Container>
  );
}

export default Chatbot;
