import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
        Hecho con &hearts; por Byron Cobos  para Academlo
        &copy; 2023
      </div>
      <div className='social-networks'>
        <a href='https://www.instagram.com/byronxcobos/'>
          <i className='fa-brands fa-instagram'></i>
        </a>
        <a href='https://www.linkedin.com/in/byron-cobos-maz%C3%B3n-53ab33161/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href='https://www.youtube.com/channel/UC4mvPz_zEYKJQ_C10c-H01w'>
          <i className='fa-brands fa-youtube'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
