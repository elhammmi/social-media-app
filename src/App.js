import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import LeftBar from "./componenta/leftBar/LeftBar";
import RightBar from "./componenta/rightBar/RightBar";
import Navbar from "./componenta/navbar/Navbar";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
function App() {

  const currentUser = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  console.log(currentUser)
  const Layout = () => {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className= {`theme-${darkMode ? "dark": "light"}`} >
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  }
  const router = createBrowserRouter([

    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
