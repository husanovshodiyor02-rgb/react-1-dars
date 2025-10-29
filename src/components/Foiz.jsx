import React from 'react'
import Img2 from '../assets/img/img2.png'

const Foiz = () => {
  return (
    <section className="container">
      <div className='flex items-center justify-between mt-20'>
        <div>
          <img src={Img2} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-[57px] leading-[101%] text-black">
            The best finance <br /> stack for <br /> entrepreneurs
          </h1>
          <p className="font-normal text-xl leading-[153%] text-black mt-5">
            70% of companies switch to us from their DIY or legacy system. Now,
            <br />
            get your bookkeeping, tax prep and CFO problems, solved. Complete
            <br />
            our
            <a href="#" className="underline text-[#335c81]">
              contact form
            </a>
            , and find out why 9 out of 10 customers recommend <br />
            us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Foiz