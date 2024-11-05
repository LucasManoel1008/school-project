import React from 'react'
import { Link } from 'react-router-dom'
import IndexImg from '../../shared/IndexImg'
import styles from './css/Home.module.css'

function Home() {
  return (
    <div>
        <header className='sticky-md-top'>
          <div className={`container ${styles.login}`}>
            <div className="acessos">
              <ul className='d-flex justify-content-end'>
                <li><Link to="/entretenimento">Sou Aluno <i class="fa-solid fa-book-open-reader"></i></Link></li>
                <li><Link>Sou Colaborador <i class="fa-solid fa-users"></i></Link></li>
                <li><Link>Sou Responsável <i class="fa-solid fa-user-shield"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.contentHeader} navbar navbar-dark navbar-expand-md menu home sticky`}>
            <div className="container">
              <img src="https://stgwebfiebbrs001.blob.core.windows.net/web/logo-fiebtech-branco.svg" alt="Logo Fiebtech" width={200} height={100} />
              <div className="collapse navbar-collapse d-flex justify-content-end">
                <div className={`navbar-nav ${styles.textoMenu} ms-auto d-block d-md-flex justify-content-end`}>
                  <ul className='d-flex justify-content-end'>
                    <li>A FIEB</li>
                    <li>Cursos</li>
                    <li>Unidades</li>
                    <li>Notícias</li>
                    <li>Contato</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </header>
        <img src={IndexImg.home} alt="" width='100%' />
    </div>
  )
}

export default Home