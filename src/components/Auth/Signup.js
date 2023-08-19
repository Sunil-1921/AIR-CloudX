import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const cPasswordRef = useRef()

    const [passwordMatched, setPasswordMatched] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value };
        console.log("user signup data=", userData);
    }

    const passwordCheck = (e) => {
        if (e.target.value === passwordRef.current.value) {
            setPasswordMatched(true)
        }
        else {
            setPasswordMatched(false)
        }
    }

    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="p-5 d-grid w-50 text-light rounded-4 bg-blur">
                    <h1 className='mb-5 d-flex justify-content-center'>Signup Form</h1>
                    <div className="mb-3 d-lg-flex">
                        <label htmlFor="exampleInputEmail1" className="form-label d-flex align-items-center d-grid w-50">First Name</label>
                        <input type="text" ref={firstNameRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputFirstName" required />
                    </div>
                    <div className="mb-3 d-lg-flex">
                        <label htmlFor="exampleInputEmail1" className="form-label d-flex align-items-center d-grid w-50">Last Name</label>
                        <input type="text" ref={lastNameRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputLastName" required />
                    </div>
                    <div className="mb-3 d-lg-flex">
                        <label htmlFor="exampleInputEmail1" className="form-label d-flex align-items-center d-grid w-50">Email address</label>
                        <input type="email" ref={emailRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputEmail1" required />
                    </div>
                    <div className="mb-3 d-lg-flex">
                        <label htmlFor="exampleInputPassword1" className="form-label d-flex align-items-center d-grid w-50">Password</label>
                        <input type="password" ref={passwordRef} className="form-control bg-blur text-light no-focus-outline" id="exampleInputPassword" required />
                    </div>
                    <div className="d-lg-flex">
                        <label htmlFor="exampleInputPassword1" className="form-label d-flex align-items-center d-grid w-50">Confirm Password</label>
                        <div className="d-grid w-100">
                            <input type="password" ref={cPasswordRef} onChange={passwordCheck} className="form-control bg-blur text-light no-focus-outline" id="exampleInputCPassword" required />
                            <div id="emailHelp" className={"form-text text-danger fw-bold " + (passwordMatched ? "invisible" : "")}>Password not matched</div>
                        </div>
                    </div>
                    <Link to="/auth/login"><div id="emailHelp" className="mb-3 d-flex justify-content-center text-light ">Already have an account?</div></Link>
                    <button type="submit" className={"btn btn-primary d-grid w-100 " + (passwordMatched ? "" : "disabled")}>Signup</button>
                </form>
            </div>
        </>
    )
}

export default Signup;