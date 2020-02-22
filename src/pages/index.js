import React from "react"
import '../styles/global.sass'

// * Components 
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Flex } from '@chakra-ui/core'

const Home = () => {
    return (
        <div>
            <Header pageTitle="Dib in Gatsby" subTitle="Instant blog on any site in only 3 minutes" isLarge />
            <Footer />
        </div>
    )
}

export default Home
