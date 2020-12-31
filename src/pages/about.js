import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import Head from '../components/head.js'

 const AboutPage = () => {
     return (
         
         <Layout>
         <Head title="About"/>
             <h1>About</h1>
             <p>about will show here</p>
             <Link to="/contact">contact me</Link>
         </Layout>
     );
}
export default AboutPage

