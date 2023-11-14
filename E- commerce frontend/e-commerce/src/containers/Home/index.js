import React from 'react';
import { Layout } from '../../components/Layouts/index';
import { Container } from 'react-bootstrap';

/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <>
    <Layout>
        <Container style={{background:"white", marginTop:"5rem"}} className='text-center'>
            <h1>Welcome to Admin Dashboard</h1>
            <p style={{margin:"2rem"}} >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
        </Container>
    </Layout>
    </>
   )

 }