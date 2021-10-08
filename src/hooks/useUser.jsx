import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from "../services/api";
import { history } from "../services/history";

const UserContext = createContext([]);

export function UserContextProvider({children}){
  // const host = "https://server.voucolar.com.br:8002"
  const host = "http://127.0.0.1:3333"

  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

  useEffect(() =>{
    async function loadData() {
      const userData = await JSON.parse(localStorage.getItem('@novosUsados/user'))
      const tokenData = await JSON.parse(localStorage.getItem('@novosUsados/token'))
  
      setUser(userData)
      setToken(tokenData)
      
      api.defaults.headers.authorization = tokenData;
    }

    loadData()
    // api.defaults.headers.authorization = `Bearer ${tokenData}`;
  }, [])

  async function handleSession(data){
    try {
      const response = await api.post('/login', data)
      toast.success(`Seja bem-vindo ${response.data.user.name}`)

      setUser(response.data.user)
      setToken(response.data.token)
      
      localStorage.setItem('@novosUsados/user', JSON.stringify(response.data.user));
      localStorage.setItem('@novosUsados/token', JSON.stringify(String(response.data.token)));

      history.push("/dashboard/classificados");
    } catch (error) {
      toast.error(error.response.data.error)
      console.log(error.response.data)
    }
  }

  async function handleRegister(data){
    try {
      const response = await api.post('/users', data)
      
      handleSession({
        email: data.email,
        password: data.password
      })

    } catch (error) {
      toast.error(error.response.data.error)
      console.log(error.response.data)
    }
  }

  function LogoutSession(){
    localStorage.removeItem('@novosUsados/user')
    localStorage.removeItem('@novosUsados/token')

    setUser(null)
    setToken("")

    history.push("/")
  }

  return (
    <UserContext.Provider value={{ host, user, token, handleSession, handleRegister, LogoutSession }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  const context = useContext(UserContext)
  return context
};