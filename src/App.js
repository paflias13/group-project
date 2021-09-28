import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/Login';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Product from './components/Product';
import AddProduct from './admin/AddProduct';
import ShoppingCart from './components/ShoppingCart';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './components/NotFound';
import EditProduct from './admin/EditProduct';
import React, { Component, useContext } from 'react';
import About from './pages/about/About';
import { Context } from './context/Context';



const App = () => {
  const { user } = useContext(Context)
  console.log(user?.role === 'user')
  return (
    <div className="App">
      {/* Announcement */}
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/shop" >
            <Shop />
          </Route>
          <Route path="/product" >
            <Product />
          </Route>
          <Route path="/login" >
            {user ? <Home /> : <Login />}
            {/* <Login /> */}
          </Route>
          <Route path="/registration" >
            {user ? <Home /> : <RegistrationForm />}
            {/* <RegistrationForm /> */}
          </Route>
          <Route path="/add" >
            {user?.role === 'admin' ? <AddProduct /> : <Home />}
            {/* <AddProduct /> */}
          </Route>
          <Route path="/edit">
            {user ? <Home /> : <EditProduct />}
            {/* <EditProduct /> */}
          </Route>
          <Route path="/basket" >
            <ShoppingCart />
          </Route>
          <Route path="/forgotPassword" >
            <ForgotPassword />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/*" >
            <NotFound />
          </Route>
          {/* <Route path="/registration/:data">
            <PrintData />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}


// function PrintData() {
//   let { data } = useParams();
//   console.log(data)
// }

export default App;
