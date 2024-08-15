// src/components/UserContext.js
import React, { 
  // useState, 
  createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ value, children }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export const useUser = () => useContext(UserContext);