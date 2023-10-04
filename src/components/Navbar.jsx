import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ margin: 0 }}>
      <ul
        style={{
          margin: 0,
          display: 'flex',
          listStyle: 'none',
          gap: '20px',
          backgroundColor: 'deepskyblue',
          padding: '1rem',
        }}
      >
        <li>
          <Link to='/' style={{ color: 'black' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/beers' style={{ color: 'black' }}>
            All beers
          </Link>
        </li>
        <li>
          <Link to='/beers/random' style={{ color: 'black' }}>
            Random Beer
          </Link>
        </li>
        <li>
          <Link to='/beers/new' style={{ color: 'black' }}>
            Add Beer
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
