import React from "react"
import { Link } from "react-router-dom"
import {Container, Row, Col, Jumbotron} from "react-bootstrap"


export default function Home(){
    return (
        <Container fluid className="parentContainer">
            <Jumbotron>
                <h1>Home</h1>
                <Link to="/registry">Click here go to Registry</Link>
            </Jumbotron>
        </Container>
    )
}