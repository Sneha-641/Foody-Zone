import React from 'react'
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';

const Companies = () => {
  return (
      <div className='mx-auto lg:px-28 md:px-12 px-4 py-12'>
          <p className="md:text-2xl sm:text-xl font-text uppercase p-4 font-medium tracking-wider text-dark">Trusted by 20+ Companies</p>
          <div className="grid md:grid-cols-5 grid-cols-3 items-center justify-center ">
            <img src={b1} className=""/>
            <img src={b2} className=""/>
            <img src={b3} className=""/>
            <img src={b4} className=""/>
            <img src={b5} className=""/>
          </div>
      </div>
  )
}

export default Companies
