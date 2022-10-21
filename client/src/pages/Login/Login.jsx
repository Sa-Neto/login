import img from '../../assets/login.svg'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../slice/authSlice'
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    dispatch(login(user));
    navigate('/');
  }
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  setTimeout(() => {
    dispatch(reset())
  }, 4000)

  return (
    <div className="container col-11 col-md-9 bg-light" id='register'>
      <div className=" row ">
        <div className="col-md-6 col-12 order-md-1">
          <h2 className='text-center'>Faça o seu login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="email" name="email" id="id" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
              <label htmlFor="form-label" className='form-label'>Digite o seu Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" name="password" id="id" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
              <label htmlFor="form-label" className='form-label'>Digite a sua Senha</label>
            </div>
            {error && <div class="alert alert-danger text-center" role="alert"> {error}</div>}
            {loading && <input type="submit" className='btn btn-primary col-12 mb-4' id='btn' disabled value="Aguarde..." />}
            {!loading && <input type="submit" className='btn btn-primary col-12 mb-4' value="Cadastrar" />}
          </form>
        </div>

        <div className="col-md-6 col-12 order-md-2" id='login'>
          <img src={img} alt="uma imagem" className='img-fluid' />
          <p className='register'>Não tem conta? <Link to="/register" className=''>Clique aqui!</Link> </p>
        </div>

      </div>
    </div>
  )
}

export default Login