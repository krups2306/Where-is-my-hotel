import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img 
            src='https://img.freepik.com/free-photo/bird-eye-shot-view-geirangerfjord-norway_181624-29054.jpg?t=st=1657198339~exp=1657198939~hmac=3ebfd6be6cc55106520e0a10dad06f40148b31ad3c404a322f8b73450102f62a&w=996' 
            alt='' 
            className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>117 properties</h2>
            </div>
        </div>

        <div className='featuredItem'>
            <img 
            src='https://img.freepik.com/free-photo/bird-eye-shot-view-geirangerfjord-norway_181624-29054.jpg?t=st=1657198339~exp=1657198939~hmac=3ebfd6be6cc55106520e0a10dad06f40148b31ad3c404a322f8b73450102f62a&w=996' 
            alt='' 
            className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>117 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured