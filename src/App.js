import Routes from './routes'
import {GlobalStyle} from './styles/globalStyles.js'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  )
}

export default App;
