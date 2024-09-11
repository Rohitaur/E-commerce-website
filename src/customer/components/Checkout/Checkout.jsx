// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useLocation } from 'react-router-dom';

// const steps = ['Login', 'Delevery Address','Order Summary', 'Payment'];

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const location=useLocation();
//   const querySearch=new URLSearchParams(location.search)

//   const step=querySearch.get("step")

//   const handleNext = () => {
    
    
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);

//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

 

//   return (
//    <div className='px-10 lg:px-20'><Box sx={{ width: '100%' }}>
//       <Stepper activeStep={step}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
         
          
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
          
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
            

//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>
//    </div>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useLocation } from 'react-router-dom';
// import DeliveryAddressForm from './DeliveryAddressForm';
// import OrderSummary from './OrderSummary';

// const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const location = useLocation();
//   const querySearch = new URLSearchParams(location.search);
//   const step = parseInt(querySearch.get("step")) || 0;  // Convert step to integer and set default as 0 if not present

//   React.useEffect(() => {
//     if (!isNaN(step)) {
//       setActiveStep(step);
//     }
//   }, [step]);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div className='px-10 lg:px-20'>
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
            
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               <Button onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>

//             <div>
//                 {step==2?<DeliveryAddressForm />:<OrderSummary />}
//             </div>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) || 0;  // Convert step to integer and set default as 0 if not present

  React.useEffect(() => {
    if (!isNaN(step)) {
      setActiveStep(step);
    }
  }, [step]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep+1}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              
              
            </Box>

            {/* Rendering different components based on the activeStep */}
            <div className='mt-10'>
              {activeStep === 1 && <DeliveryAddressForm />}
              {activeStep === 2 && <OrderSummary />}
              {activeStep === 3 && <Typography>Payment Form Coming Soon</Typography>}
            </div>
          </React.Fragment>
          
        )}
      </Box>
      <DeliveryAddressForm />
    </div>
  );
}
