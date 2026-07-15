import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './page/common/home.page.jsx'
import ForgotPasswordPage from './page/common/forgot-password.page.jsx'
import LoginPage from './page/common/login.page.jsx'
import ProfilePage from './page/common/profile.page.jsx'
import RegisterPage from './page/common/register.page.jsx'
import AdminPage from './page/manager/admin.page.jsx'
import CartPage from './page/payment/cart.page.jsx'
import CheckoutPage from './page/payment/checkout.page.jsx'
import ProductDetailPage from './page/product/product-detail.page.jsx'
import ProductPage from './page/product/product.page.jsx'

import AuthGuest from './auth/auth-guest.js'
import AuthAdmin from './auth/auth-admin.js'



function App() {


  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<AuthGuest><HomePage /></AuthGuest>} />
        <Route path='/product' element={<AuthGuest><ProductPage /></AuthGuest>} />
        <Route path='/product-detail' element={<AuthGuest><ProductDetailPage /></AuthGuest>} />
        <Route path='/cart' element={<AuthGuest><CartPage /></AuthGuest>} />
        <Route path='/checkout' element={<AuthGuest><CheckoutPage /></AuthGuest>} />
        <Route path='/login' element={<AuthGuest><LoginPage /></AuthGuest>} />
        <Route path='/register' element={<AuthGuest><RegisterPage /></AuthGuest>} />
        <Route path='/forgot-password' element={<AuthGuest><ForgotPasswordPage /></AuthGuest>} />
        <Route path='/profile' element={<AuthGuest><ProfilePage /></AuthGuest>} />


        <Route path='/admin' element={<AuthAdmin><AdminPage /></AuthAdmin>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './css/App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
