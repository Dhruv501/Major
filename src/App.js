
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/DashBoard';
import AboutUs from './Pages/AboutUs';
import Product from './Components/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFolder from './Components/AddFolder';
import AddProduct from './Components/AddProduct';
import ProductDashBoard from './Pages/ProductDashBoard';
import Summary from './Components/Summary';
import CategorySummary from './Components/CategorySummary';
import { ContactUs } from './Components/ContactUs';

function App() {
  return (
    <>
      <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path = "/products/:categoryId">
            <ProductDashBoard />
          </Route>
          <Route path="/addcategory">
            <AddFolder />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path = "/product/:categoryId/:productId">
            <Product />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/categories">
            <CategorySummary />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
