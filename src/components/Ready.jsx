import React from 'react'

const Ready = () => {
  return (
    <section className="container">
      <div className="h-[283px] rounded-[10px] bg-[#8bd4d6] mt-[80px]">
        <div className='flex justify-between items-center p-[90px_70px]'>
          <div>
            <h2 className="font-bold text-[46px] leading-[121%] text-black">
              Ready to Switch? It's simple.
            </h2>
            <p className="font-normal text-xl leading-[153%] text-black mt-4">
              Speak to an expert today
            </p>
          </div>
          <button className="font-bold text-lg leading-[140%] text-white w-[159px] h-[50px] rounded-[100px] bg-black">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ready