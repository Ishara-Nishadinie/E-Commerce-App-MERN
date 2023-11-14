import React from 'react'
import { Layout } from '../../components/Layouts/index';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from '../../components/UI/Input';

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return(
    <> 
    <Layout>
        <Container>
            <Row style={{marginTop:"5rem"}}>
                <Col md={{span:"6", offset:"3"}}>
                <Form>
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