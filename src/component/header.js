import React from 'react'

const Header= () => {
  return (
    <div className='header'>
        <h1 className='headername'> Movies Rating </h1>
    </div>
  )
}

const Navbar =()=>{
    return (
        <div className='navbar'>
            <ul className='ullist'>
                <li className='lilist'>
                    <p> HOME </p>
                </li>
                <li className='lilist'>
                    <p> RATING </p>
                </li>
                <li className='lilist'>
                    <p> OPINION </p>
                </li>
            </ul>
        </div>
    )
}

export {Header , Navbar}