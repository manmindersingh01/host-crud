import React from 'react'
import grD from '../assets/bg-main-desktop.png'
import grM from '../assets/bg-main-mobile.png'
import cdF from '../assets/bg-card-front.png'
import cdB from '../assets/bg-card-back.png'
import success from '../assets/success.svg'
import { useNavigate } from 'react-router-dom'
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex flex-col w-full h-screen md:flex md:flex-row '>
      <div className='h-screen w-[30%] bg-[url("../assets/bg-main-desktop.png")] '>
        <img src={grD} alt="" className=' min-h-screen' />
        <img src={cdF} alt="" className=' absolute left-20 top-40' />
        <img src={cdB} alt="" className=' absolute left-44 top-[430px]' />

      </div>
      <div className=' bg-white h-screen w-[70%] flex items-center justify-center'>
        <div className=' flex flex-col justify-center items-center'>
          <img src={success} alt="" className='m-4' />
          <h3>THANK YOU!</h3>
          <p className=' text-slate-400'>we have added your card details</p>
          <button
            className="bg-blue-950 hover:bg-purple-700 text-slate-300 py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline m-4"
            onClick={() => navigate('/users')}
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  )
}

export default Success