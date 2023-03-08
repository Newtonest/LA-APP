import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import closeIcon from '../images/icon-close.svg'
export function Navbar() {
   
    const handleIconCloseClick = ()=> {
        modal.current.style.display = 'none';
    }
    const iconClose = useRef();
    const open = useRef();
    const modal = useRef();
    const handleClick = ()=> {
        modal.current.style.display = 'flex'
    }
    return(
        <div className="navbar__container" >
            <nav className="navbar" >
               <div className='navbar__logo-container'>
                     FINAL JUDGEMENT
                </div>
                <div className='navbar__burger-container' onClick={handleClick}>
                    <FaBars style={{ fontSize:'32px' }} ref={open}/>
                </div>
                <ul className='navbar__options-container'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>US</li>
                </ul>
            </nav>
            <div className='modal__navbar-background' ref={modal}>
             <nav className='modal__navbar'>
                <div className='modal__navbar-close-icon__container' ref={iconClose} onClick={handleIconCloseClick}>
                    <img src={closeIcon} alt="Exit Icon" className='modal__navbar-close-icon' />
                </div>
                <ul className='modal__navbar-list'>
                    <li className='modal__navbar-list-link'>HOME</li>
                    <li className='modal__navbar-list-link'>ABOUT</li>
                    <li className='modal__navbar-list-link'>CONTACT</li>
                    <li className='modal__navbar-list-link'>US</li>
                </ul>
             </nav>
            </div>
        </div>
    )
}