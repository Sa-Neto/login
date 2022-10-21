import { api, requestConfig } from "../utils/config";

//Register an user
const register = async(data) => {
  const config = requestConfig('POST',data)
  try {
    const res = await fetch(api + '/register',config)
    .then((res) => res.json())
    .catch((err) => err)
    if(res.userId) {
      localStorage.setItem('user',JSON.stringify(res))
    }
    return res;
  } catch (e) {
    console.log(e)
  }
}

const logout = async () => {
  localStorage.removeItem('user');
}

const login = async (data) => {
  const config = requestConfig('POST',data)
  try {
    const res = await fetch( api + '/login',config)
    .then((res) => res.json())
    .catch((err) => err)
    if(res.userId){
      localStorage.setItem("user",JSON.stringify(res))
    }
    return res
  } catch (error) {
    console.log(error)
  }
}

const authService = {
  register,
  logout,
  login,
}

export default authService;