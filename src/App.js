import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataForm} from './DataForm'

export const App = () => {
  
  const [data,setData]=useState([]);
  data.length===0 &&
  fetch('https://jsonplaceholder.typicode.com/users/')
     .then(response=>response.json())
     .then(responsedata=>setData(responsedata));
    
  const search = e => {
    const {
      target: { value }
    } = e;
    const lowerCaseValue = value.toLowerCase();
    const arrayTmp = [];
    data.forEach(element => {
      if (
         element.name.toLowerCase().includes(lowerCaseValue) || 
         element.username.toLowerCase().includes(lowerCaseValue)  || 
         element.email.toLowerCase().includes(lowerCaseValue) ||
         element.phone.includes(value)
      ) {
        arrayTmp.push(element);
      }
    });
    setData(arrayTmp);
  };

  return (
    
     <div>
      <DataForm data={data} />
      </div>
    
  );
};

export default App