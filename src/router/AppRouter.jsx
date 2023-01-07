import { Route, Routes } from 'react-router'
import { LoginPages } from '../auth/pages/LoginPages';
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
    
      <Routes>    
          <Route path='/login' element={
            <PublicRoute>
              <LoginPages/>
            </PublicRoute>
          } />

                <Route path='/*' element={
                  <PrivateRoute>
                    <HeroesRoutes/>
                  </PrivateRoute>
                }/>

                {/* < Route path='/*' element= {<HeroesRoutes/>} /> */}
                {/* < Route path='login' element= {<LoginPages/>} /> */}


      </Routes>
    </>
  )
}
