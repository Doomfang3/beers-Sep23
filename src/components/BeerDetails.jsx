import { useEffect, useState } from 'react'

const BeerDetails = ({ beerId, isRandom }) => {
  const [beer, setBeer] = useState()

  async function getBeer() {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${isRandom ? 'random' : beerId}`
      )
      if (response.ok) {
        const theOneBeer = await response.json()
        console.log(theOneBeer)
        setBeer(theOneBeer)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBeer()
  }, [])

  return beer ? (
    <>
      <img src={beer.image_url} alt='' style={{ height: '200px' }} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <h3>{beer.first_brewed}</h3>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </>
  ) : (
    <h1>Loading ...</h1>
  )
}

export default BeerDetails
