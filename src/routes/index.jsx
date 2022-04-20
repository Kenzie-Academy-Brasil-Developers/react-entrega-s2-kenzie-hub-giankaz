import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Routes() {
    return (
      <Switch>
          <Route exact path='/'>
                <Login />
          </Route>
          <Route exact path='/register'>
                <Register />
          </Route>
          <Route exact path='/home'>
                 <Home />
          </Route>
    
      </Switch>
    )

}


