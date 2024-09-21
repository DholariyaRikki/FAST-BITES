import './App.css'
import Login from './auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout'
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/ui/Navbar'

const appRouter= createBrowserRouter([
{
path:"/",
element:<Navbar/>,
// children:[{
//   path:"/login"
// }]

},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:"/forgot-password",
  element:<ForgotPassword/>
},
{
  path:"/reset-password",
  element:<ResetPassword/>
},
{
  path:"/verify-email",
  element:<VerifyEmail/>
},


])

function App() {
return (
  <main>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"/>

    <RouterProvider router={appRouter}>
      
    </RouterProvider>
</main>
)
}
export default App