import {useState} from 'react'

const Nav = (props) => {

  const [dropdown, setDropdown] = useState(false)

  const showMenu = () => {
    console.log(dropdown)
    setDropdown(!dropdown)
  }

    return (
      <nav className='Navbar'>
        <h1 className='logo'>Start Bootstrap</h1>
        <ul className='nav-links'>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Projects</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
        <button className="menu" onClick={showMenu}>Menu <i className='fas fa-bars'></i></button>
        <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Projects</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </nav>
    )
}

export default Nav
