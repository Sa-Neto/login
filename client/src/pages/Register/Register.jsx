import img from '../../assets/hello.svg'
import './auth.css'
// Hooks
import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
// Redux
import {register,reset} from '../../slice/authSlice';

const Register = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const dispatch = useDispatch();


  const {loading,error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
      confirmPassword
    }
    dispatch(register(user))
  };

  setTimeout(() => {
      dispatch(reset())
  },4000)

  return (
    <div className="container col-11 col-md-9 bg-light" id='register'>
      <div className="align-items-center row gx-5">
        <div className="col-md-6 col-12 order-md-2">
          <h2 className='text-center'>Faça o seu login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" name="name" id="id" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
              <label htmlFor="form-label" className='form-label'>Digite o seu Nome</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" name="email" id="id" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
              <label htmlFor="form-label" className='form-label'>Digite o seu Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" name="password" id="id" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
              <label htmlFor="form-label" className='form-label'>Digite a sua Senha</label>
            </div>
            <div className="form-floating mb-3 ">
              <input type="password" name="confirmPassword" id="id" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
              <label htmlFor="form-label" className='form-label'>Confime a sua Senha</label>
            </div>

            {error && <div class="alert alert-danger text-center" role="alert">{error}</div>}
            {loading && <input type="submit" className='btn btn-primary col-12 mb-4' disabled value="Aguarde..." />}
            {!loading && <input type="submit" className='btn btn-primary col-12 mb-4' value="Cadastrar" />}
          </form>
        </div>
        <div className="col-md-6 order-md-1 " id='div-2'>
          <div className="col-12 ">
            <img src={img} alt="uma imagem" className='img-fluid text-center' />
          </div>
          <div className="col-12">
            <p className='register'>Já possui conta ? <Link to="/login" className=''>Clique aqui!</Link> </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register