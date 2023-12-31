import React from 'react'
import { Layout } from '../../components/Layouts/index';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from '../../components/UI/Input';

/**
* @author
* @function Signup

**/

export const Signup
 = (props) => {
  return(
    <>
    <Layout>
        <Container>
            <Row style={{marginTop:"5rem"}}>
                <Col md={{span:"6", offset:"3"}}>
                <Form>
                    <Row> 
                    <Col md="6">
                    <Input
                    label="First Name"
                    placeholder= "First Name"
                    value=""
                    type="text"
                    onChange={()=>{}}
                    />
                    </Col>
                    <Col md="6">
                    <Input
                    label="Last Name"
                    placeholder= "Last Name"
                    value=""
                    type="text"
                    onChange={()=>{}}
                    />
                    </Col>
                    </Row> 
                    <Input
                    label="Email"
                    placeholder= "Email"
                    value=""
                    type="email"
                    onChange={()=>{}}
                    />
                    <Input
                    label="Password"
                    placeholder= "Password"
                    value=""
                    type="password"
                    onChange={()=>{}}
                    />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
    </>
   )

 }