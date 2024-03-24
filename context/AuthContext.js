"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  // REPLACE BELOW WITH WORKING PRODUCTION SITE KA URL
  const apiUrl = process.env.API_URL || 'http://localhost:3000'; // Fallback to localhost if API_URL is not defined


  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      if (data?.user) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
    }
  };

  const addNewAddress = async (address) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/address`,address);

      if (data) {
        router.push("/me");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setUser,
        registerUser,
        clearErrors,
        addNewAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;