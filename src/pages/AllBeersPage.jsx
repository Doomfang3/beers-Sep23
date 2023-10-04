import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllBeersPage() {
  // Have a way to store all the beers
  const [beers, setBeers] = useState([])

  // Have a way to fetch all the beers
  async function getBeers() {
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
      if (response.ok) {
        const allTheBeers = await response.json()
        console.log(allTheBeers)
        setBeers(allTheBeers)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // Fetch the beers at the right time
  useEffect(() => {
    getBeers()
  }, [])

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplate: 'auto / repeat(3, 1fr)',
        gap: '1rem',
        padding: '0 1rem',
      }}
    >
      {beers.map(beer => (
        <li
          key={beer._id}
          style={{
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: '1px 2px 7px 2px lightGrey',
          }}
        >
          <Link to={`/beers/${beer._id}`} style={{ color: 'black' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <img
                src={beer.image_url}
                style={{
                  height: '150px',
                  borderRight: '2px dashed darkgrey',
                  paddingRight: '15px',
                }}
              />
              <div>
                <h4>{beer.name}</h4>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AllBeersPage
