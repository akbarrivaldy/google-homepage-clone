import React from 'react'
import {
  Container
} from 'react-bootstrap'
import Links from './Links'
import Menu from './Menu'
import Profile from './Profile'

export default function() {
  const links = [
    {
      href: 'https://mail.google.com',
      name: 'Gmail'
    },
    {
      href: 'https://www.google.co.id/imghp?hl=id&tab=ri&authuser=0&ogbl',
      name: 'Image'
    },
  ]

  const profiles = [
    {
      email: 'johndoe@gmail.com',
      name: 'John Doe',
      image: 'https://lh3.googleusercontent.com/-ifU7wFOHaiU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm9DD3trNLTNcDVF-zdN6gtS_zN5w/s48-c/photo.jpg',
    },
    {
      email: 'janedoe@gmail.com',
      name: 'Jane Doe',
      image: 'https://lh3.googleusercontent.com/-ifU7wFOHaiU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm9DD3trNLTNcDVF-zdN6gtS_zN5w/s48-c/photo.jpg',
    }
  ]

  return (
    <>
      <div id="Navbar">
        <Container fluid className="d-flex justify-content-end align-items-center py-3">
          <Links links={links} />
          <Menu />
          <Profile profiles={profiles} />
        </Container>
      </div>
    </>
  )
}