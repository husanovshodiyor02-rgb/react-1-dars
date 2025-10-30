import React from 'react'
import Img3 from '../assets/img/img3.png'
import Img4 from '../assets/img/img4.png'
import Img5 from "../assets/img/img5.png";

const Switch = () => {
  return (
    <section className="container">
      <h1 className="font-bold text-[58px] leading-[99%] text-black my-20">
        Why Switch?
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <img src={Img3} alt="" />
          <br />
          <h2 className="font-bold text-[28px] leading-[129%] text-black">
            Powerful software
          </h2>
          <p className="font-normal text-lg leading-[133%] text-black mt-5">
            Included in our service, each <br /> customer gets in-house software
            to <br />
            access live
            <a href="#" className="underline text-[#335c81]">
              financial dashboards
            </a>
            and <br /> real-time management reports.
          </p>
        </div>
        <div>
          <img src={Img4} alt="" />
          <br />
          <h2 className="font-bold text-[28px] leading-[129%] text-black">
            Track cashflow
          </h2>
          <p className="font-normal text-lg leading-[133%] text-black mt-5">
            Stay on top of your working capital, <br />{" "}
            <a href="#" className="underline text-[#335c81]">
              taxes
            </a>
            , and cashflow, to ensure your <br /> business is performing at its
            best.
          </p>
        </div>
        <div>
          <img src={Img5} alt="" />
          <br />
          <h2 className="font-bold text-[28px] leading-[129%] text-black">
            Award winning support
          </h2>
          <p className="font-normal text-lg leading-[133%] text-black mt-5">
            Expect the best from us. Get a <br /> dedicated finance team that
            will <br />
            handle all your accounting, R&D <br /> credits and CFO needs.
          </p>
        </div>
      </div>
      <button className="font-bold text-lg leading-[140%] text-black w-[235px] h-[50px] rounded-[100px] bg-[#f7b2b7] mt-20">
        Discover what we do
      </button>
    </section>
  );
}

export default Switch