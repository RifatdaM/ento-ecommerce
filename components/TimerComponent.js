import React from 'react'

function TimerComponent({days, hours, minutes, seconds}) {
  return (
    <div className='flex gap-6 justify-center pt-4 pb-8'>
        <div className='flex flex-col gap-1 items-center'>
            <div className='py-3 w-12 bg-white'>
                <h4 className=' font-medium'>{days}</h4>
            </div>
            <p className=' text-xs text-Gray-2'>Days</p>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className='py-3 w-12 bg-white'>
                <h4 className=' font-medium'>{hours}</h4>
            </div>
            <p className=' text-xs text-Gray-2'>Hours</p>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className='py-3 w-12 bg-white'>
                <h4 className=' font-medium'>{minutes}</h4>
            </div>
            <p className=' text-xs text-Gray-2'>Minutes</p>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className='py-3 w-12 bg-white'>
                <h4 className=' font-medium'>{seconds}</h4>
            </div>
            <p className=' text-xs text-Gray-2'>Seconds</p>
        </div>
    </div>
  )
}

export default TimerComponent