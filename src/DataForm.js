import React, { useState, useEffect } from "react";
import DataForms from "./DataForms.css";

export const DataForm = ({ data }) => {
  const [dataCopy, setDataCopy] = useState(data);
  
  useEffect(()=> {
    setDataCopy(data)
  }, [data])
  
  const search = e => {
    const {
      target: { value }
    } = e;
    const lowerCaseValue = value.toLowerCase();
    const arrayTmp = [];
    data.forEach(element => {
      if (
        element.name.toLowerCase().includes(lowerCaseValue) ||
        element.username.toLowerCase().includes(lowerCaseValue) ||
        element.email.toLowerCase().includes(lowerCaseValue) ||
        element.phone.includes(value)
      ) {
        arrayTmp.push(element);
      }
    });
    setDataCopy(arrayTmp);
  };
  return (
    <div className="blueContainer" >  
      
    
      <input className="search" onChange={search} type="text" placeholder="Search"/>
      <div className="grid-container">
        
        {dataCopy.map(element => (
          <div key={element.email} className="grid-item">
            <img
              className="logo"
              src="https://uploads-ssl.webflow.com/55af217e059671c578b90173/55d89d3e53965dde61578349_person.png"
              alt="logo"
            />
            <p>
        
              <h3>Full Name:    {element.name}</h3>
            </p>
            <p>
              UserName: {element.username}
            </p>
            <p>
              Address: {element.address.street}
            </p>
            <p>
              <img
                className="logo1"
                src="https://chatsworthschool.com/assets/images/chat.png"
                alt="logo1"
              />
              <a href={`mailto:${element.email}`}> {element.email}</a>
            </p>
            <p>Company: {element.company.name}</p>
            <p>
              <img
                className="logo1"
                src="https://img2.freepng.ru/20180610/trl/kisspng-toll-free-telephone-number-email-af-geoscience-and-turnaround-management-5b1df37975bfd8.9025303215286895294823.jpg"
                alt="logo1"
              /> {element.phone}
            </p>
            <p>
              Website:  {element.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataForm;
