import { ToastContainer, toast } from 'react-toastify';

import Main from '../../components/Main'
import Header from '../../components/Header'
import Nav from '../../components/Nav'


export default function Home() {
  return (
    <div>
    <Nav/>
    <Header/>
    <Main/>
    </div>
  )
}
