import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "12345");
    navigate("/todo-list");
  };

  return (
    <>
      <Link to="/todo-list">Todo List</Link>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default Login;
