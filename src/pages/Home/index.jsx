import { ToastContainer, toast } from 'react-toastify';
import {useEffect, useState} from 'react'

import Main from '../../components/Main'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

import {Api} from '../../components/API/index.jsx'

export default function Home({setState}) {
  const userId = window.localStorage.getItem('@Khub:user')
  const [user, setUser] = useState('')

  useEffect(() => {
    Api.get(`users/${JSON.parse(userId)}`)
    .then((res) => setUser(res.data))
    .catch((err) => console.error(err))

  }, [userId])

  return (
    <div>
    <Nav setState={setState}/>
    <Header user={user}/>
    <Main user={user}/>
    </div>
  )
}
