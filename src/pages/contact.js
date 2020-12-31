import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import Head from '../components/head.js'

 const ContactPage = () => {
     return (
         <Layout>
         <Head title="Contact"/>
             <h1>Contact</h1>
             <p>meet me on twitter - <Link to='https://twitter.com/PranitIngole' target="_blank" >@pranitingole</Link></p>
            
         </Layout>
     );
}
export default ContactPage
