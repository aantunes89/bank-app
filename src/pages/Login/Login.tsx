import { Link } from "react-router-dom";
import { Container } from "./styles";

const Login = () => {
  return (
    <Container>
      <form>
        <h1>Enter your credentials</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="ex: john-doe01" />

        <label htmlFor="user-password">Password</label>
        <input type="password" name="user-password" placeholder="password" />

        <Link className=".login-button" type="button" to="/home">
          <button>Sign In</button>
        </Link>
      </form>
    </Container>
  );
};

export default Login;
