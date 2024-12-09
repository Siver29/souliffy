// IpContext.js
import React, { createContext, useState, useEffect } from 'react';

export const IpContext = createContext();

export const IpProvider = ({ children }) => {
  const [ip, setIp] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchIpAndCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIp(data.ip);
        setCountry(data.country_name);
        console.log(data.country_name)
      } catch (error) {
        console.error('Error fetching IP address and country:', error);
      }
    };

    fetchIpAndCountry();
  }, []);

  return (
    <IpContext.Provider value={{ ip, country }}>
      {children}
    </IpContext.Provider>
  );
};