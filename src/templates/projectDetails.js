import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'



const projectDetails = () => {
    
  return (
        <Layout>
            <div className={styles.details}>
                <h2>
                    title
                </h2>
                <h3>
                    Stack
                </h3>
                {/* <div>
                    <Img className={styles.featured } />
                </div>
                <div dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}


export default projectDetails
