import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import Head from '../components/head.js'

 const IndexPage = () => {
   return (
    
     <Layout>
       <Head title="Home"/>
       <h1>Hello.</h1>
       <h2>I'm pranit a fullstack developer</h2>
      
       <p>Need a devloper<Link to="/contact"> contact me</Link></p>
       
     </Layout>
   );
}

export default IndexPage
