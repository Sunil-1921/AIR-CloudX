import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email: emailRef.current.value, password: passwordRef.current.value };
        console.log("user login data=", userData);
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="p-5 d-grid w-50 text-light rounded-4 bg-blur">
                <h1 className='mb-5 d-flex justify-content-center'>Login Form</h1>
                <div className="mb-3 d-lg-flex">
                    <label htmlFor="exampleInputEmail1" className="form-label d-flex align-items-center d-grid w-50">Email address</label>
                    <input type="email" ref={emailRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputEmail1" required />
                </div>
                <div className="mb-3 d-lg-flex">
                    <label htmlFor="exampleInputPassword1" className="form-label d-flex align-items-center d-grid w-50">Password</label>
                    <input type="password" ref={passwordRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputPassword" required />
                </div>
                <Link to="/auth/signup"><div id="emailHelp" className="mb-3 d-flex justify-content-center text-light ">Create an account.</div></Link>
                <button type="submit" className="btn btn-primary d-grid w-100 ">Login</button>
            </form>
        </div>
    )
}

export default Login;