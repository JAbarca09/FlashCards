import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FlashCard from '../Components/FlashCard';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col md={12} className="mt-2 d-flex justify-content-center WhiteHeader">
                    <h1>
                        Flash Card Study
                    </h1>
                </Col>
            </Row>
            <FlashCard />
        </Container>
    )
}
