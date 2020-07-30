import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink';

function Menu({page}) {
    console.log(page)

    function apareceButton() {
        if (page[0] === 'Home') {
            return(
                <ButtonLink className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
                </ButtonLink>
            )
        }
        return (<></>)
    }
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo do AndreTube" />
            </Link>

            {apareceButton()}

        </nav>
    )
}

export default Menu;