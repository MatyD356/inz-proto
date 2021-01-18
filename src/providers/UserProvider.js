import React, { createContext } from 'react'
import "firebase/auth";

export const UserContext = createContext({ user: null });