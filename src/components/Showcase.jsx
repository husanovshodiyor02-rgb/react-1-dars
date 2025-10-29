import React from 'react'
import Img1 from '../assets/img/img1.png'

const Showcase = () => {
  return (
    <section className="container">
      <div className='flex items-center justify-between'>
        <div>
          <h1 className="font-bold text-[77px] leading-[108%] text-black mt-20">
            Get your <br /> finances right
          </h1>
          <p className="font-normal text-xl leading-[153%] text-black mt-7">
            Get your finances right with Accountancy Cloud. We offer the best{" "}
            <br />
            accounting, R&D credits and CFO services for ambitious businesses{" "}
            <br />
            who want to grow.
          </p>
          <p className="font-bold text-lg leading-[133%] text-black mt-20">
            Switching to us is simple
          </p>
          <button className="w-[159px] h-[61px] rounded-[100px] bg-black text-white hover:text-black hover:bg-white border hover:border-black mt-8">
            Talk to us
          </button>
        </div>
        <div>
            <img src={Img1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Showcase