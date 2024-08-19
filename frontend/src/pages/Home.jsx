import React from 'react'
import Card from '../components/Card'

const Home = ({products}) => {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='offset-1 col-7'>
            {products.map((product) => (
              <>
                <Card product={product} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home