import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {Container, Form} from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"


export default function Registry(){

    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;
        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if(error) return;
        let newData = [...registryData]        
        newData[index] = textInput
        setRegistryData(newData);
    }

    useEffect(() => {
        if(textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])

    
    console.log(registryData)

    return (
        <Container fluid className="parentContainer">
            <h1>Registry</h1>
            <Link to="/home">Click here go to Home</Link>
            <Form onSubmit={addItem}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Item : </Form.Label>
                    <Form.Control type="input" value={textInput} onChange={(e) => setTextInput(e.target.value)}  />
                </Form.Group>
                <Form.Group>
                    <Button className="btn btn-primary" type="submit" variant="primary">Submit</Button>
                </Form.Group>
            </Form>
            {error ? <span style={{color: "red"}}>Error Occured</span> : null}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id #</th>
                        <th>Item</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registryData.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{item}</td>
                                    <td><Button type="button" variant="light" onClick={() => removeItem(index)}>Remove</Button></td>
                                    <td><Button type="button" variant="light" onClick={() => editItem(index)}>Update</Button></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
            
        </Container>

    )
}