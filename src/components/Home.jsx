import React from 'react';
import { Link } from 'react-router-dom';
import App from "../assets/app.png";
import Rider from "../assets/rider.png";
import Merchant from "../assets/merchant.png";
import chicken from "../assets/chicken.png";
import hamburger from "../assets/hamburger.png";
import friedrice from "../assets/fried-rice.png";
import pizza from "../assets/pizza.png";
import young from "../assets/young.png";
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="font-sans">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: `url(${young})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
              Taste <span className="text-[#E60023]">Africa</span>
            </h1>
            <p className="text-xl md:text-3xl mb-8 max-w-2xl drop-shadow-md">
              Authentic flavors delivered to your door or enjoyed in our vibrant space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/menu" 
                className="bg-[#E60023] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C3001B] transition-transform transform hover:scale-105 shadow-lg"
              >
                Order Now
              </Link>
              <Link 
                to="/reservations" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#E60023] transition-colors shadow-md"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-[#E60023] rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">30 Mins Delivery</h3>
              <p className="text-gray-600">Hot meals at your doorstep</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-[#E60023] rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Fresh ingredients, expert chefs</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-[#E60023] rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0H1.5a2 2 0 00-2 2v4h16v-4a2 2 0 00-2-2H7.5m0 0L10 12H7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">We're always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Signature Dishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={friedrice} 
                alt="Jollof Rice" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Jollof Rice</h3>
                <p className="text-gray-300 mb-4">#3,500</p>
                <button className="bg-white text-[#E60023] px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={chicken} 
                alt="Suya Chicken" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Suya Chicken</h3>
                <p className="text-gray-300 mb-4">#12,000</p>
                <button className="bg-white text-[#E60023] px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={hamburger} 
                alt="Pepper Soup" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Pepper Soup</h3>
                <p className="text-gray-300 mb-4">#8,500</p>
                <button className="bg-white text-[#E60023] px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={pizza} 
                alt="Plantain Pizza" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Plantain Pizza</h3>
                <p className="text-gray-300 mb-4">#9,500</p>
                <button className="bg-white text-[#E60023] px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Join Our Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <img src={App} alt="User app" className="h-32 w-full object-contain mb-6"/>
              <h3 className="text-2xl font-bold mb-4">Food Lovers</h3>
              <p className="text-gray-600 mb-6">Discover and order from top African restaurants</p>
              <Link to="/signup/customer" className="inline-block bg-[#E60023] text-white px-6 py-3 rounded-lg hover:bg-[#C3001B]">
                Join Now
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <img src={Merchant} alt="Merchant" className="h-32 w-full object-contain mb-6"/>
              <h3 className="text-2xl font-bold mb-4">Restaurant Partners</h3>
              <p className="text-gray-600 mb-6">Grow your business with our platform</p>
              <Link to="/signup/vendor" className="inline-block bg-[#E60023] text-white px-6 py-3 rounded-lg hover:bg-[#C3001B]">
                Partner With Us
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <img src={Rider} alt="Rider" className="h-32 w-full object-contain mb-6"/>
              <h3 className="text-2xl font-bold mb-4">Delivery Riders</h3>
              <p className="text-gray-600 mb-6">Earn flexibly with our delivery network</p>
              <Link to="/signup/courier" className="inline-block bg-[#E60023] text-white px-6 py-3 rounded-lg hover:bg-[#C3001B]">
                Become a Rider
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#E60023]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Exclusive Offers</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for 20% off your first order and weekly specials
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#E60023] px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;