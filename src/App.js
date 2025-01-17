import './App.css';
import {
  HashRouter,
  NavLink,
  Outlet,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';

const Home = () => {
  return <p>這是 Home 首頁
  </p>;
};
const Todo = () => {
  return <div>
    <p>這是 Todo 頁面
  </p>
    <Logout />
  </div>
};

const Logout = () => {
  const navigate = useNavigate();

  function logout() {
    navigate('/login');
  }

  return <button onClick={() => logout()}>登出</button>;
}

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return <div>
    <h2>Post 頁面</h2>
    <Outlet />
  </div>;
};

const PostId = () => {
  const params = useParams();

  return <p>Post ID: {params.userId}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {
          /* Routes, Route 練習區 */
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/post" element={<Post />}>
              <Route path=":userId" element={<PostId />}></Route>
            </Route>
          </Routes>
        }
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
