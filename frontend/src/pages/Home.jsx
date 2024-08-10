import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='offset-1 col-7'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home