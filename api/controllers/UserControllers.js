import bcrypt, { hash } from 'bcryptjs';

import createUserToken from "../helpers/create-token";
import User from '../models/user';

export const register = async(req,res) => {
  const {name,email,password,confirmPassword} = req.body;

  if(!name){
    return res.status(422).json({ error: ["Nome é um campo obrigatorio"]})
  }

  if(!email){
    return res.status(422).json({ error: ["Email é um campo obrigatorio"]})
  }

  if(!password){
    return res.status(422).json({ error: ["Password é um campo obrigatorio"]})
  }

  if(!confirmPassword){
    return res.status(422).json({ error: ["Confirmação de senha é um campo obrigatorio"]})
  }

  try {
    const user = await User.findOne({email});
    
    if (user) {
      return res.status(422).json({ error :['usuario já cadastrado']})
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password,salt)
    
    const newUser = new User({ name,email,password:hash})
    await newUser.save()
    console.log(newUser)
    createUserToken(newUser,req,res)

  } catch (e) {
    console.log(e)
  }  

}

export const login = async(req,res) => {
  const {email,password} = req.body;

  if (!email) {
    return res.status(422).json({error: ['Email é obrigatório']})
  }
  if (!password) {
    return res.status(422).json({error: ['Senha é obrigatório']})
  }

  
  try {
    const user = await User.findOne({email});
   
    if (!user) {
      return res.status(404).json('Email ou senha está errado')
    }

    if(!(await bcrypt.compare(password,user.password))){
      return res.status(422).json({error:["Senha inválida"]})
    }  
    
    createUserToken(user,req,res)

  } catch (e) {
    console.log(e)
  }
   
}