import { Height } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { bgcolor, height } from '@mui/system'
import React from 'react'
import { Avatar, Box, Grid} from '@mui/material'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Raam</p>
                    <p className='opacity-70'>April 29, 2024</p>
                </div>
            </div>

            <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
            <p>Nice product, i love this shirt</p>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard