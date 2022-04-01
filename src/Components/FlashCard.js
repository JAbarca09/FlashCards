import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { getAllCSharpQuestions, getAllHtmlQuestions, getCsharpQuestionById, getHtmlQuestionById, getRandomCsharpQuestionId, getRandomHtmlQuestionId } from '../Services/DataContext';

//Fetch by id incrementing and decrementing
//If you really want randomization randomize the arrays of questions themselves instead of ids!
export default function FlashCard() {

    const [previous, setPrevious] = useState();
    const [next, setNext] = useState();

    //useStates for the cards!
    let [currentCardId, setCurrentCardId] = useState(0); 
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    //bool
    const [areWeUsingCsharpCards, setAreWeUsingCsharpCards] = useState(false);


    let csharpQuestions = [];
    let htmlQuestions = [];

    useEffect(async () => {
        csharpQuestions = await getAllCSharpQuestions();
        htmlQuestions = await getAllHtmlQuestions();

    }, [])


    const handlePrevious = async () => {
        setShowAnswer(false);
        let currentId = currentCardId;
        if(areWeUsingCsharpCards === true)
        {
            if(currentId == 1){
                setCurrentCardId(126);
                let nextCsharpQuestion = await getCsharpQuestionById(126);
                setCurrentQuestion(nextCsharpQuestion.csharpQuestion);
                setCurrentAnswer(nextCsharpQuestion.csharpAnswer);
            }else{
                setCurrentCardId(--currentCardId);
                let nCsharpQuestion = await getCsharpQuestionById(currentCardId);
                setCurrentQuestion(nCsharpQuestion.csharpQuestion);
                setCurrentAnswer(nCsharpQuestion.csharpAnswer);
            }
        }else{
            if(currentCardId == 1){
                setCurrentCardId(88);
                let nextHtmlQuestion = await getHtmlQuestionById(88);
                setCurrentQuestion(nextHtmlQuestion.htmlQuestion);
                setCurrentAnswer(nextHtmlQuestion.htmlAnswer);
            }else{
                setCurrentCardId(--currentCardId);
                let nHtmlQuestion = await getHtmlQuestionById(currentCardId);
                setCurrentQuestion(nHtmlQuestion.htmlQuestion);
                setCurrentAnswer(nHtmlQuestion.htmlAnswer);
            }
        }
    }

    const handleNext = async () => {
        //what if we exceed the length of either collection?
        let currentId = currentCardId; 
        setShowAnswer(false);
        if(areWeUsingCsharpCards === true){
            if(currentId == 126){
                setCurrentCardId(1);
                let nextCsharpQuestion = await getCsharpQuestionById(1);
                setCurrentQuestion(nextCsharpQuestion.csharpQuestion);
                setCurrentAnswer(nextCsharpQuestion.csharpAnswer);
            }else{
                console.log(currentId);
                setCurrentCardId(++currentCardId);
                let nCsharpQuestion = await getCsharpQuestionById(currentCardId);
                setCurrentQuestion(nCsharpQuestion.csharpQuestion);
                setCurrentAnswer(nCsharpQuestion.csharpAnswer);
            }
        }else{
            if(currentId == 88){
                setCurrentCardId(1);
                let nextHtmlQuestion = await getHtmlQuestionById(1);
                setCurrentQuestion(nextHtmlQuestion.htmlQuestion);
                setCurrentAnswer(nextHtmlQuestion.htmlAnswer);
            }else{
                setCurrentCardId(++currentCardId);
                let nHtmlQuestion = await getHtmlQuestionById(currentCardId);
                setCurrentQuestion(nHtmlQuestion.htmlQuestion);
                setCurrentAnswer(nHtmlQuestion.htmlAnswer);
            }
        }
    }

    const handleShowAnswer = () => {
        if(showAnswer == false){
            setShowAnswer(true)
        }else{
            setShowAnswer(false);
        }
    }

    //randomization does not work as intended!
    const handleShowRandomCSharpQuestion = async () => {
        setAreWeUsingCsharpCards(true);
        // let randomId = Math.floor(Math.random() * csharpQuestions.length+1);
        // let randomId = await getRandomCsharpQuestionId(1, csharpQuestions.length + 1);
        let CsharpQuestion = await getCsharpQuestionById(1);
        setCurrentCardId(1);
        setCurrentQuestion(CsharpQuestion.csharpQuestion);
        setCurrentAnswer(CsharpQuestion.csharpAnswer);

    }

    const handleShowRandomHtmlQuestion = async () => {
        setAreWeUsingCsharpCards(false);
        // let randomId = await getRandomHtmlQuestionId(1, htmlQuestions.length +1);
        let HtmlQuetion = await getHtmlQuestionById(1);
        
        setCurrentCardId(1);
        setCurrentQuestion(HtmlQuetion.htmlQuestion);
        setCurrentAnswer(HtmlQuetion.htmlAnswer);
    }

    return (
        <Container>
            <Card className="card">
                <Row className="mt-5">
                    <Col className="mb-4"></Col>
                </Row>
                <Row>
                    <Col md={3} sm={12} className="mt-4 text-center">
                        <Button className="Button" onClick={handlePrevious}>Previous</Button>
                    </Col>
                    <Col md={6} sm={12} className="mt-2 text-center">
                        <Card.Body className="p-0 text-center">
                            <p>{currentQuestion}</p>
                        </Card.Body>
                        <Card.Body className="p-0 text-center">
                            <p>{showAnswer == true ? currentAnswer : null }</p>
                        </Card.Body>
                    </Col>
                    <Col md={3} sm={12} className="mt-4 text-center">
                        <Button className="Button" onClick={handleNext}>Next</Button>
                    </Col>
                </Row>
            </Card>
            <Row className="mt-3">
                <Col md={4} className="mt-2 d-flex justify-content-center">
                    <Button className="Button2" onClick={handleShowRandomCSharpQuestion}>
                        C#
                    </Button>
                </Col>
                <Col md={4} className="mt-2 d-flex justify-content-center">
                    <Button className="Button2" onClick={handleShowAnswer}>
                        Show Answer
                    </Button>
                </Col>
                <Col md={4} className="mt-2 d-flex justify-content-center">
                    <Button className="Button2" onClick={handleShowRandomHtmlQuestion}>
                        Html
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
