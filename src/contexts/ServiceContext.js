"use client"
import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const addService = async (service) => {
    try {
      const response = await axios.post('/api/services', service);
      setServices([...services, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar serviço", error);
    }
  };

  return (
    <ServiceContext.Provider value={{ services, addService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServiceContext = () => useContext(ServiceContext);
