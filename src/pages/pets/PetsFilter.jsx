// import React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// // custom
// import { usePets } from '@/context/petsContext';

// export default function RadioButtonsGroup() {
//   const { fetchByParams } = usePets();

//   return (
//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="all"
//         name="radio-buttons-group"
//         onChange={e => fetchByParams("type", e.target.value)}
//       >
//         <FormControlLabel value="all" control={<Radio />} label="All" />
//         <FormControlLabel value="cats" control={<Radio />} label="Cats" />
//         <FormControlLabel value="dogs" control={<Radio />} label="Dogs" />
//       </RadioGroup>
//     </FormControl>
//   );
// }