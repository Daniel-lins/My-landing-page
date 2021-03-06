import React from 'react';

import Layout from '../components/Layout';
import pj1 from '../pages/pj1.gif'
import HP1 from '../pages/HP1.gif'
import RG1 from '../pages/RG1.gif'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
           Desenvolvedor Front-end e estudante de analise e desenvolvimento de sistemas altualmente focado em React.
           
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>
            
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Pokedex</h3>
              <div className="subheading mb-3">HTML/CSS/JavaScript</div>
              <p>
                Pokedex feita em em com HTML,CSS e Javascript onde é consumida uma API com informações dos pokemons
              </p>
              <img src={pj1}></img>
            </div>
            <div className="resume-date text-md-right link">
            <span className="text-primary "><a href="https://github.com/Daniel-lins/pokedex-master">Repositório do Projeto</a></span>
          <span className="text-primary"><a href="https://pokedex-master.vercel.app/">Link projeto</a></span> 
           </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Harry Potter Flix</h3>
              <div className="subheading mb-3">HTML/CSS/JAVASCRIPT/JQUERY</div>
              <p>
                Harry potter flix é uma aplicação front-end feita com base no projeto "clone da netflix" da digital innovation one ,no botcamp html web developer, Porém reformulado para um layout com o catálogo de apenas filmes da saga Harry Potter.
              </p>
              <img src={HP1}></img>
              
            </div>
            <div className="resume-date text-md-right link">
              <span className="text-primary"><a href="https://github.com/Daniel-lins/Harrypotterflix-Dio">Repositório do Projeto </a></span>
              <span className="text-primary"><a href="https://harrypotterflix-dio.vercel.app/">Link projeto </a></span>
              
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Resgate Game</h3>
              <div className="subheading mb-3">HTML/CSS/JAVASCRIPT/JQUERY</div>
              <p>
              Jogo 2D onde temos o objetivo de destruir os inimigos e salvar os aliados. Na criação do game usamos HTML,CSS e JavaScript/JQuery e JQuery Collisio
              </p>
        
            <img src={RG1}></img>
                </div>
            <div className="resume-date text-md-right link">
              <span className="text-primary"><a href="https://github.com/Daniel-lins/resgate-game">Repositório do Projeto</a></span>
              <span className="text-primary"><a href="https://resgate-game.vercel.app/">Link projeto</a></span>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>  */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Estácio de Sá</h3>
              <div className="subheading mb-3">Analise e desenvolvimento de Sistemas</div>
              {/* <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro de 2021- Atualmente</span>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
          PRINCIPAIS LINGUAGENS DE PROGRAMAÇÃO E FERRAMENTAS
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li> */}
            {/* <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Design Responsivo
            </li>
            {/* <li>
              <i className="fa-li fa fa-check"></i>
          multi Browser Test &amp; Debugging
            </li> */}
            {/* <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li> */}
            <li>
              <i className="fa-li fa fa-check"></i>
              Metodologia Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            Além de ser apaixonado por tecnologia, amo jogar jogos online, assistir filmes/séries e jogar basquete
          </p>
          <p className="mb-0">
   
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Conquistas &amp; Certificados</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp HTML Web Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp SPTech Desenvolvimento Front-end
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp Become Remote
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Aceleração Global Dev #11 - Avanade
            </li>
            {/* <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
