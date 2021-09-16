import React from 'react'
import Navbar from './Navbar'
import * as styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
             <Navbar />
            <h1>This is header of the page</h1>
            <img alt="abstract art" src="/abstract-art-red-green-painting.jpeg" width="100%"/>
        </header>
    )
}
