<template>
      <div class="box">
  

    <div class="content">
      <h3 style="text-align: center;" id="TitleCards">Toque ou click em qualquer imagem para mais detalhes </h3>
      <div class="flex-container">


        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/LogoBuidIt.PNG" class="ImgCard" alt="Avatar" id="BuildIt">
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/MynarkiLogo.png" class="ImgCard" alt="Avatar" id="Mynarski">
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/LibracomLogo.jpg" class="ImgCard" alt="Avatar" id="Libra">
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/LogoAbsis.png" class="ImgCard" alt="Avatar" id="ABSIS">
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/BbdiLogo.png" class="ImgCard" alt="Avatar" id="BBDI">
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="EspacCard">
          <a href="#">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="Assets/Imagens/Numeria.png" class="ImgCard" alt="Avatar" id="NUMERIA"
                    style="background-color: rgba(255, 255, 255, 0.925);">
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- Box da BuildIt -->
        <div id="BoxBuildIt" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">Buid It</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Desenvolvedor FullStack jr</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri">Desenvolver soluções conforme demanda de clientes.Ultilizando C# , alterações em API
                  C#<br>
                  AspNet MVC, AspNet MVVM, consultas a bancos de dados, utilização de stored procedure, JS, HTML, CSS,
                  Bootstrap, Angular.
                  Treinar modelos de IA(IBM Watson) com texto em formato CSV.</h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">dez de 2021 - jun de 2022</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="BoxLibra" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">Libracom</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Dev Junior C# AspNet</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri"> Desenvolver soluções baseadas em AspNet e C#, webForms,
                  <br>desenvolver biblioteca para impressão de relatórios em PDF , usar bootstrap, Jquery
                  , consulta a banco de dados, utilização de stored procedure.
                </h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">jul de 2021 - out de 2021</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="BoxAbsis" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">Absis sistema para gestão de pessoas</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Estagiário de desenvolvimento de software</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri"> Desenvolver soluções baseadas em AspNet e C#, webForms, jquery
                  <br>Desenvolver e implementar aplicação da empresa com C#, VB, AspNet, AspNetCore, JavaScript,Css.
                </h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">out de 2020 - mar de 2021</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="BoxBBDI" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">BBDI</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Técnico em manutenção eletrônica</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri"> Atividades como técnico em eletrônica , avaliação de produtos , suporte ao SAC e ao
                  cliente.</h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">set de 2017 - ago de 2020</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="BoxMynarski" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">Mynarski e Associados Ltda</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Analista de desenvolvimento</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri"> Corrigir bug's e criar novas funcionalidades em sistema legado('WebForms') C#,<br>
                  JS, criar e alterar funcionalidades de App's Java('Android'). </h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">set de 2022 - até o momento</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="BoxNUMERIA" style="display: none;">
          <div>
            <div class="card" id="CardBody">
              <div class="card-header" id="HeaderCard">
                <h3 class="card-title" style="text-align: center;">NUMERIA</h3>
              </div>
              <div class="card-body" id="CardResum">

                <h4 id="Carg">Cargo:</h4>
                <h5 id="TextCarg">Desenvolvedor pleno I</h5>
                <h4 id="TitleDescri">Descrição das atividades realizadas:</h4>
                <h5 id="TextDescri"> Desenvolvimento BackEnd com C# e
                  .NetCore,desenvolvimento FrontEnd com Vue 3.</h5>
                <h5 id="Periodo">Período</h5>
                <h6 id="TextPeriodo">jan de 2023 - até o momento</h6>
                <a href="ResumoPro.html" class="btn btn-primary" id="BtnVoltar">Voltar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="footer">
      <div class="flex-container">
        <div class="NotasRodape">
          <p style="color: white;display:inline-block;">Formas de contato :</p>
        </div>

        <div class="NotasRodape">
          <img src="Assets/Imagens/whatsapp.png" alt="LogoWhatsAPP" style="display:inline-block;">
          <p style="color: white;display:inline-block;">(51)995352884</p>
        </div>

        <div class="NotasRodape">
          <a href="https://www.linkedin.com/in/raphael-bento-b37656181/"> <img src="Assets/Imagens/LogoLinkedin.png"
              alt="Logo linkedin" id="LogoLink"> </a>
        </div>
      </div>
    </div>
  </div>
</template>