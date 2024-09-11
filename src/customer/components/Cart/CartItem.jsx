import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@headlessui/react';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>

        <div className='flex items-center'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src='data:image/jpeg;base64,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' alt='' />
          
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                <p className='opacity-70'>Size: L,White</p>
                <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>₹199</p>
                    <p className='opacity-50 line-through'>₹211</p>
                    <p className='text-green-600 font-semibold'>5% off</p>
                </div>
            </div>

        </div>

        <div className='lg:flex items-center lg:space-x-10 pt-4'>

<div className='flex items-center space-x-2'>
    <IconButton>
    <RemoveCircleOutlineIcon />
    </IconButton>
    <span className='py-1 px-7 border rounded-sm'>3</span>
    <IconButton sx={{color:"RGB(145 85 253)"}}>
     <AddCircleOutlineIcon />
    </IconButton>
    
</div>
 <div>
    <Button className="text-purple-950">remove</Button>
    </div>   
</div>
    </div>
  )
}

export default CartItem