import React from 'react'

function WeOfferReusableComp({Icon, title, description}) {
  return (
    <div className='flex items-start gap-4 mt-6'>
        <Icon className="h-10"/>
        <div>
            <h3 className=' text-2xl'>{title}</h3>
            <p className=' text-sm text-Gray-2 pt-2'>{description}</p>
        </div>
    </div>
  )
}

export default WeOfferReusableComp