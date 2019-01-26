import React from 'react';
const reverse = (props) => {
   props.split('').reduce((a,v) => {
     return v + a;
   }, '');
   return(
       <h3>{reverse}</h3>
   )
    }
export default reverse;