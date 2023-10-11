import { Link } from 'react-router-dom'
import NavStyles from './styles'

const Nav = () => {
  return (
    <NavStyles>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav