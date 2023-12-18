import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { alertSuccess, alertError } from "../utils/customAlerts";
import { messages } from "../utils/messages";
import { validationsFields } from "../utils/validations";
import { AuthContext } from "../context/AuthContext";
import './styles/login.css';
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const Login = () => {
    
    
    const {
        register,
        formState : {errors}
    } = useForm();
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const {login, state} = useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      login(
        userData.email,
        userData.password
      );
      alertSuccess(state.user?.msg, messages.logSuccess, null );
    } catch (err) {
        console.log(err);
    //     alertError(`${err.response.data}`, "Error al iniciar sesión", () => {
    //   });
    }
  };


  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>

      <div className="containerLogin container">
      <h2 className="text-center my-3">LOGIN</h2>
        <div className="row justify-content-center">
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  {...register("email", {
                    required: true,
                    maxLength: 100,
                    minLength: 10,
                    pattern: validationsFields.email,
                  })}
                  onChange={handleChange}
                />
                {errors.email?.type === "required" && (
                  <p className="alertas">{messages.emailError}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="alertas">{messages.emailPatternError}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
