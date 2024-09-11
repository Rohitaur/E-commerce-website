import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"`space-between"}}>
            <Grid item xs={6}>

                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='data:image/jpeg;base64,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' alt=''/>
              
                  <div className='ml-5 space-y-2'>
                    <p className=''>Men Slim Mid Rise Black Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                  </div>
                </div>

            </Grid>

            <Grid item xs={2}>
            <p> ₹1099</p>

            </Grid>
            <Grid item xs={4}>
                {true &&<div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>

                <p className='text-xs'>
                    Your Item Has Been Delivered
                </p>

                </div>}

                {false && <p>
                    <span>
                        Expected Delivered On Mar 03
                    </span>
                </p>}


            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard