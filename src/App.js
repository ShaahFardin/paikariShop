import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import EditProduct from './components/EditProduct';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login';
import Orders from './components/Orders/Orders';
import AddProducts from './components/Products/AddProducts';
import Products from './components/Products/Products';
import SignUp from './components/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: '/products',
          loader: ()=> fetch("http://localhost:5000/products"),
          element: <Products></Products>
        },
        {
          path: '/addProducts',
          element: <AddProducts></AddProducts>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/product/edit/:id',
          element: <EditProduct/>
        }
        
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
