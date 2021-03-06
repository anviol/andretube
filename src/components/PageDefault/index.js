import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu'
import Footer from '../Footer'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 5% 5%;
`

function PageDefault({ children, page }) {
    return(
        <>
            <Menu page={[page]}/>
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}


export default PageDefault