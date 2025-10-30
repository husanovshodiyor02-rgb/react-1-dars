import React from 'react'
import Img6 from '../assets/img/img6.png'
import Img7 from "../assets/img/img7.png"
import Img8 from "../assets/img/img8.png"

const Plans = () => {
  return (
    <section className="bg-[#fdeced] h-[705px] mt-20">
      <div className="container">
        <h1 className="font-normal text-[58px] leading-[99%] text-black pt-20">
          Plans built for growth
        </h1>
        <div className="flex justify-between mt-28">
          <div>
            <img src={Img6} alt="" />
            <h2 className="font-bold text-[28px] leading-[129%] text-black mt-5">
              Early stage startup
            </h2>
            <p className="font-normal text-lg leading-[133%] text-black mt-5">
              Need your accounting system set up? <br /> Learn financial best
              practice and <br /> prime your business for the next <br /> stage
              of growth. We get you moving <br /> quickly with an accounting
              solution <br /> that does what you need.
            </p>
          </div>
          <div>
            <img src={Img7} alt="" />
            <h2 className="font-bold text-[28px] leading-[129%] text-black mt-5">
              Scale up
            </h2>
            <p className="font-normal text-lg leading-[133%] text-black mt-5">
              Spend less time worrying about your <br /> finances and more time
              shaping your <br /> company’s future. Get your <br /> bookkeeping,
              R&D credits and CFO <br />
              problems, solved.
            </p>
          </div>
          <div>
            <img src={Img8} alt="" />
            <h2 className="font-bold text-[28px] leading-[129%] text-black mt-5">
              High growth
            </h2>
            <p className="font-normal text-lg leading-[133%] text-black mt-5">
              Gain the financial accuracy, visibility, <br /> and real-time
              analysis you need to <br /> make smarter decisions, drive <br />{" "}
              efficiency, and achieve total <br /> organizational alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans