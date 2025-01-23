import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseAuth/FirebaseAuth';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AboutUs from './components/AboutPage/AboutUs';
import ContactUs from './components/ContactPage/ContactUs';
import Logout from './pages/cart/Logout/Logout';

function App() {

  const [cart, setCart] = useState([]);

  const AddToCart = (item) => {

    const isProductExist = cart.find((findItem) => findItem.id === item.id);

    if (isProductExist) {
      // we just increase the quantity directly when double click on any product
      const updateCartQuantity = cart.map((data) => (
        data.id === item.id ? { ...data, quantity: data.quantity + 1 } : data
      ))

      setCart(updateCartQuantity);

    } else {
      // console.log(item);
      // we used here spread operator so that cart value should not be overwrited it can store more than 1 value
      // we use quantity to add the product counting
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
  }

  // increasing quantity in cart ( when click on + button )
  const handleInc = (id) => {
    const QuantInc = cart.map((data) => (
      data.id === id ? { ...data, quantity: data.quantity + 1 } : data
    ))
    setCart(QuantInc);
  }

  // Decreasing quantity in cart ( when click on - button )
  const handleDec = (id) => {
    const QuantDec = cart.map((data) => (
      data.id === id && data.quantity > 1 ? { ...data, quantity: data.quantity - 1 } : data
    ))
    setCart(QuantDec);
  }

  // to remove product from cart
  const handleRemove = (id) => {
    // if we don't use ! with == then it will delete other products and remain only one on which we will click
    const remove =  cart.filter((filteritem)=>filteritem.id !== id)
    
    setCart(remove);
  }


  // calculating total price of all items in cart
  const getTotalPrice =()=>{
    const CalculatedAmount = cart.reduce((total, cartReduceItem)=>{
      // it will not calculate if quantity increase
        // return total + cartReduceItem.price
      // calculate everything
      return total + cartReduceItem.price * cartReduceItem.quantity
    },0)
    // Here 0 is initial value of total
    return CalculatedAmount+shippingAmount-discount;
  }

  // promocode error
  const [invalid, setInvalid] = useState("");

  // calculating Discount
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handlePromoCodeDiscount = () => {
      if(promoCode==="DISCOUNT10"){
          setDiscount(getTotalPrice()*.10); // applying 10% discount
          setPromoCode("");
          setInvalid("10% discount Applied")

      }else{
          setInvalid("Invalid Promocode")
      }
  }

  // adding shipping amount in total price
  const [shippingAmount, setshippingAmount] = useState(0);
  
      const handletAmount = (e) => {
          const shippingCost = parseFloat(e.target.value);
          setshippingAmount(shippingCost);
      }

  // Updating the total price when cart changes or shipping changes
  useEffect(() => {
    setTAmount(getTotalPrice());
  }, [cart, shippingAmount, promoCode]);


  const [tAmount, setTAmount] = useState(getTotalPrice());
  

  // getting name of user who just logged in
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
    
  }, []);


  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar cart={cart} userName={userName}/>
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart 
              cart={cart} 
              handleInc={handleInc} 
              handleDec={handleDec} 
              handleRemove={handleRemove} 
              getTotalPrice={getTotalPrice} 
              handletAmount={handletAmount} 
              handlePromoCodeDiscount={handlePromoCodeDiscount} 
              promoCode={promoCode} 
              setPromoCode={setPromoCode} 
              invalid = {invalid}
            />} />
            <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/productinfo/:productID" element={<SingleProduct AddToCart={AddToCart} />} />
          </Routes>
          <Toaster/>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App