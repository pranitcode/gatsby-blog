import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'




const Footer = () => {

    const data = useStaticQuery(graphql`
    
    query {
        site {
            siteMetadata {
                auther
            }
        }
    }

    
    
    `)

    return (
        <footer className={footerStyles.footer}>
         
            <p>created by {data.site.siteMetadata.auther }, ©2021</p>
            
        </footer>
     
    )
}

export default Footer
