import { NavbarWrapper } from './styles'

import logo from '../../Assets/Icons/logo.svg'
import hamburguer from '../../Assets/Icons/icon-hamburger.svg'
import close from '../../Assets/Icons/icon-close.svg'

const Navbar = () => {
    return ( 
        <NavbarWrapper active={false}>
            <div className="iconContainer">
                <img className='menuIcon' src={hamburguer} alt="Menu" />
            </div>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <menu className='active'>
                <ul>
                    <li>home</li>
                    <li>shop</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </menu>
        </NavbarWrapper> 
    );
}
 
export default Navbar;