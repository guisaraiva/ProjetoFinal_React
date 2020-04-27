import React from 'react';
import './styles.css';
import banner from '../src/images/banner.jpg';


function App() {
  return (
    <section class="estrutura">
      <section class="header">
            <img src={banner} alt="Banner principal"/>
      </section>  
      
      <nav class="menu">
        <ul>
          <li>Promoções</li>
          <li>Bolsas</li>
          <li>Sapatos</li>
          <li>Bolsas</li>
        </ul>
      
      </nav>
      
      <section class="conteudo">
      Conteúdo
      </section>
      
      <footer class="rodape">
      Rodapé
      </footer>
    </section>
   
  );
}

export default App;
