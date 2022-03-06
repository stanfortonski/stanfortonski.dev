import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
import { useIntl } from "react-intl"
import Modal from "./Modal"

const navMenuOverlayVariants = {
  initial: { opacity: 0 },
  animate:{
    opacity: 1,
    transition: { duration: .2 }
  },
  exit: {
    opacity: 0, 
    transition: { duration: .2 }
  }
}

const navMenuVariants = {
  initial: { y: '-100%' },
  animate:{
    y: 0,
    transition: { type: 'spring', stiffness: 85 }
  },
  exit: { y: '-100%' }
}

const Nav = () => {
  const intl = useIntl();
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(prevState => {
      if (!prevState)
        document.body.style.overflowY = 'hidden';
      else document.body.style.overflowY = 'visible';

      return !prevState;
    });
  }

  return (
    <nav className="nav">
      <button className="nav-toggler" onClick={toggleMenu}>
        <span className="label">Menu</span>
      </button>

      <AnimatePresence>
        {show && (
          <motion.div className="nav-menu-overlay" variants={navMenuOverlayVariants} initial="initial" animate="animate" exit="exit">
            <motion.div className="nav-menu" variants={navMenuVariants}>
              <Modal>
                <Modal.Header onClose={toggleMenu} btnClose>Menu</Modal.Header>
                <Modal.Body>
                  <ul>
                    <li><Link className="btn w-full mb-3" to={`/${intl.locale}`}>Home</Link></li>
                    <li><Link className="btn w-full mb-3" to={`/${intl.locale}/projects`}>Projects</Link></li>
                    <li><Link className="btn w-full mb-3" to={`/${intl.locale}/about`}>About</Link></li>
                    <li><Link className="btn w-full mb-3" to={`/${intl.locale}/contact`}>Contact</Link></li>
                    <li><a className="btn w-full mb-3" href="https://github.com/stanfortonski">My GitHub</a></li>
                    <li><a className="btn w-full mb-3" href="https://codeiter.com" rel="nofollow">My Blog</a></li>
                  </ul>
                </Modal.Body>
              </Modal>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav
