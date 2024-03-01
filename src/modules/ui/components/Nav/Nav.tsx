import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { NavMenu } from '../NavMenu';
import './styles.css';

export const Nav = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevState) => {
            document.body.style.overflowY = !prevState ? 'hidden' : 'visible';
            return !prevState;
        });
    };

    return (
        <nav className="nav">
            <button className="nav__toggler" onClick={toggleMenu}>
                <span className="nav__toggler-label">Menu</span>
            </button>

            <AnimatePresence>{show && <NavMenu toggleMenu={toggleMenu} />}</AnimatePresence>
        </nav>
    );
};
