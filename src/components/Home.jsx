import { 
  ClockIcon, 

  StarIcon,
  ShoppingBagIcon,
  MapPinIcon,
  TicketIcon,
} from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import Footer from './Footer';
import Bg from '../assets/bg.jpg';

const Home = () => {
  const colors = {
    primary: '#ef4444',
    secondary: '#1f2937',
    accent: '#22c55e',
    light: '#f8fafc',
    dark: '#111827'
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <div className="absolute inset-0 bg-gray-900/70">
            <img 
              src={Bg}
              alt="Delicious food spread"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center md:text-left max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold text-white leading-[1.15] drop-shadow-lg">
                Crave It? Get It Delivered in 
                <span className="text-primary-400" style={{ color: colors.primary }}> 30 Minutes</span>
              </h1>
              <p className="text-xl text-gray-200 font-medium max-w-xl drop-shadow-md">
                Discover culinary excellence from 1500+ restaurants. From gourmet meals to comfort food - satisfaction guaranteed.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex-1 relative max-w-xl">
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="w-full px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-primary-500"
                    style={{ backgroundColor: colors.light }}
                  />
                  <button
                    className="absolute right-2 top-2 px-8 py-2 rounded-full font-bold transition-transform hover:scale-105"
                    style={{ backgroundColor: colors.primary, color: colors.light }}
                  >
                    Find Food
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {['Pizza', 'Sushi', 'Burgers', 'Tacos', 'Pasta', 'Salad', 'Dessert', 'Vegan'].map((cuisine) => (
                  <span 
                    key={cuisine} 
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white 
                             hover:bg-white/30 transition-all border border-white/10 font-medium"
                  >
                    #{cuisine}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-white py-8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '1500+', label: 'Restaurants' },
                { number: '98%', label: 'Positive Reviews' },
                { number: '30min', label: 'Avg. Delivery' },
                { number: '1M+', label: 'Delivered Meals' }
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <p className="text-3xl font-bold" style={{ color: colors.primary }}>{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get your favorite meals in 3 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: MapPinIcon,
                  title: "1. Choose Location",
                  text: "Enter your address or let us detect your location"
                },
                { 
                  icon: ShoppingBagIcon,
                  title: "2. Select Meal",
                  text: "Browse menus and customize your order"
                },
                { 
                  icon: ClockIcon,
                  title: "3. Receive Delivery",
                  text: "Track your order in real-time until arrival"
                }
              ].map((step, idx) => (
                <div key={idx} className="group p-8 rounded-xl bg-white hover:bg-gray-50 
                transition-all shadow-sm hover:shadow-md border border-gray-100 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full" style={{ backgroundColor: `${colors.primary}15` }}>
                      <step.icon className="w-8 h-8" style={{ color: colors.primary }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="py-20" style={{ backgroundColor: colors.dark }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-white mb-4">
                Special Offers
              </h2>
              <p className="text-gray-300 text-lg">
                Limited-time deals and discounts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "First Order",
                  discount: "20% OFF",
                  code: "FRESH20",
                  description: "New customers special offer"
                },
                { 
                  title: "Family Feast",
                  discount: "$15 OFF",
                  code: "FAMILY15",
                  description: "Orders over $50"
                },
                { 
                  title: "Late Night",
                  discount: "Free Delivery",
                  code: "NIGHT25",
                  description: "10PM - 4AM orders"
                }
              ].map((offer, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center 
                transform hover:scale-105 transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    <TicketIcon className="w-12 h-12" style={{ color: colors.primary }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.discount}</h3>
                  <p className="text-lg text-gray-600 mb-3">{offer.title}</p>
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <code className="font-mono font-bold" style={{ color: colors.primary }}>
                      {offer.code}
                    </code>
                  </div>
                  <p className="text-sm text-gray-500">{offer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied food lovers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map((i) => (
                <div key={i} className="p-6 rounded-xl border border-gray-100 
                hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={`https://source.unsplash.com/random/100x100/?person-${i}`}
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The fastest delivery and most delicious meals in town! I'm hooked!"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App CTA */}
        <div className="py-20" style={{ backgroundColor: colors.primary }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Get the Mobile App
                </h2>
                <p className="text-xl mb-6">
                  Order faster, track deliveries in real-time, and get exclusive offers
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-black rounded-lg 
                  hover:bg-gray-900 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.736-1.48 3.49-2.94 1.214-1.73 1.715-3.443 1.745-3.53-.039-.013-3.35-1.299-3.38-5.103-.027-3.2 2.605-4.722 2.727-4.792-1.5-2.219-3.828-2.466-4.646-2.503-2.122-.172-4.126 1.109-5.19 1.109zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.049-2.668.805-3.53 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.558-1.702"/>
                    </svg>
                    <span>Download on the<br/>App Store</span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-black rounded-lg 
                  hover:bg-gray-900 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708ZM18 18.001V20.001H6V18.001H18Z"/>
                    </svg>
                    <span>GET IT ON<br/>Google Play</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="https://source.unsplash.com/random/600x500/?mobile-app"
                  alt="Mobile app"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Showcase (existing section remains here) */}

      </div>
      <Footer/>
    </>
  );
};

export default Home;