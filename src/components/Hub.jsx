import React from 'react'
import Img9 from '../assets/img/img9.png'

const Hub = () => {
  return (
    <section className="container">
      <div className='flex justify-between items-center mt-[120px]'>
        <div>
          <h1 className="font-bold text-[58px] leading-[99%] text-black">
            The AC Hub
          </h1>
          <p className="font-normal text-xl leading-[153%] text-black mt-10">
            Explore our dedicated online resources. We've got the tips, <br />{" "}
            tricks and online accounting know-how for business success.
          </p>
          <button className="font-bold text-lg leading-[140%] text-black w-[140px] h-[50px] rounded-[100px] bg-[#f7b2b7] mt-[60px]">
            View Hub
          </button>
        </div>
        <div>
          <img src={Img9} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hub