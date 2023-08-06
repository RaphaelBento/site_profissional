<template>
 <div class="box">
    
        <div class="content">
          <h3 style="text-align: center;">Toque ou click em qualquer Card para mais detalhes. </h3>
          <div class="flex-container">
            <div class="vira-card">
              <div class="vira-card-inner">
                <div class="vira-card-front">
                  <img src="@/assets/imagens_projetos/AspnetCoreMvc.png" alt="imagem AspNetCore MVC" style="width:250px;height:300px;border-radius: 8px;">
                  <h6>Consumindo Api com AspNetCore_Mvc</h6> 
                </div>
                <div class="vira-card-back">
                  <h4>Conumindo API com ASPNETCORE MVC</h4> 
                  <p>Aplicação construida para consumir API de finança da Awesome.</p> 
                  <p>Contem duas páginas na aplicação uma para conversão de dolar para real e outra para conversão de euro para real.
                    <br>
                    <a href="https://github.com/RaphaelBento/Consumindo_API_de_Cota-o">Link do repositório GitHub</a>
                  </p>
                </div>
              </div>
            </div>


            <div class="vira-card">
              <div class="vira-card-inner">
                <div class="vira-card-front">
                  <img src="@/assets/imagens_projetos/APINETCORE.png" alt="Imagem API .net core" style="width:250px;height:300px;border-radius: 8px;">
                  <h6>API .NETCORE</h6>
                </div>
                <div class="vira-card-back" style="text-align: center;padding: 10px;">
                  <h4>API feita em .NetCore</h4> 
                 
                  <p> Trata-se de uma API simples com funcionamento básico
                    ganhará mais funções, e um CRUD com banco usando Entity FrameWork Core.
                    <br>
                    para acessar o código fonte da aplicação acesse <a href="https://github.com/RaphaelBento/API-ASP-.Net-Core-">Link do repositório GitHub</a></p>
                </div>
              </div>
            </div>


            <div class="vira-card">
              <div class="vira-card-inner">
                <div class="vira-card-front">
                  <img src="@/assets/imagens_projetos/NetFrameWork.jpeg" alt="Imagem dotNet FrameWork" style="width:250px;height:300px;border-radius: 8px;">
                  <h6>API .Net FrameWork</h6> 
                </div>
                <div class="vira-card-back" style="text-align: center;padding: 10px;">
                  <h4>API feita em .Net FrameWork</h4> 
                  <p>Trata-se de uma API simples com funcionamento básico
                    ganhará mais funções, e um CRUD com banco usando Entity FrameWork.
                    <br>
                    para acessar o código fonte da aplicação acesse <a href="https://github.com/RaphaelBento/Api_DotNet_FrameWork">Link do repositório GitHub</a> </p> 
                 
                </div>
              </div>
            </div>

            <div class="vira-card">
              <div class="vira-card-inner">
                <div class="vira-card-front">
                  <img src="@/assets/imagens_projetos/ControleContatos.png" alt="Imagem dotNet FrameWork" style="width:250px;height:300px;border-radius: 8px;">
                  <h6>Controle de Contatos</h6> 
                </div>
                <div class="vira-card-back" style="text-align: center;padding: 10px;">
                  <h4>Aplicação feita em AspNetCore MVC</h4> 
                  <p>Aplicação usa padrão MVC para gerenciar um CRUD de contatos, também utiliza EntityFrameWork Core como ORM
                    <br>
                    para acessar o código fonte da aplicação acesse <a href="https://github.com/RaphaelBento/Controle-de-contatos-">Link do repositório GitHub</a> </p> 
                 
                </div>
              </div>
            </div>

           
          </div>
          <h3 style="text-align: center;margin-top: 35px;">Em breve mais projetos serão adicionados <br>me segue no <a href="https://www.linkedin.com/in/raphael-bento-b37656181/">Linkedin</a> </h3>
        </div>

     
    </div>
</template>

<script>
export default {

}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.box {
    display: flex;
    flex-flow: column;
    height: 100vh;
}

.box .header {
 
}

.header,#HeaderCard{
background-size: 50% 100%;
background-position: center;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f6f8f9+0,e5ebee+50,d7dee3+51,f5f7f9+100;White+Gloss */
background: #f6f8f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f6f8f9 0%, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f6f8f9 0%,#e5ebee 50%,#d7dee3 51%,#f5f7f9 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f6f8f9 0%,#e5ebee 50%,#d7dee3 51%,#f5f7f9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f8f9', endColorstr='#f5f7f9',GradientType=0 ); /* IE6-9 */

}
.box .content {
    flex-grow: 1;
    flex-basis: auto;
    background-color: #cad3e8;
}

.box .footer {
    flex-grow: 0;
    flex-basis: 15px;
    background-color: #29251a;
    width: 100%;
}

.center {
    margin: auto;
    width: 30%;
    text-align: center;
  }

  #FotoPerf{
    display: block;
  margin-left: auto;
  margin-right: auto;
    width: 40%;
  }

  #tituloPagina{
    text-align: center;
    font-family: "Times New Roman", Times, serif;
  }
  #SubTitle{
    margin-top: 15px;
    text-align: center;
  }
  
  
  #TagSauda{
    text-align: center;
  }

  #LogoLink{
    max-width: 35px;
    max-height: 55px;
   
  }


  #CorpCard{
    box-shadow: 10px 5px 5px #696969;
  }
 #CardBody{
  box-shadow: 10px 5px 5px #696969;
  margin-top: 10%;
  margin-left: 50%;
  margin-bottom: 5%;
 }
 @media only screen and (max-width: 750px) {
  #CardBody{
    
    margin-top: 4%;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5%;
  }

 }
 @media only screen and (max-width: 750px) {
  #BtnVoltar{
    width: 27%;
    position: relative;
    left: 40%;
  }
 }

 @media only screen and (min-width:750px) {
  #CardBody{
    margin-top: 10%;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5%
  }

 }
 @media only screen and (min-width:750px) {
  #BtnVoltar{
    width: 20%; 
    position: relative;
    left: 40%;
  }
 }


 #PagConstruct{
  height: auto;
  width:100%; 
 }

 @media only screen and (max-width:375px) {
  #PagConstruct{
    height: 461px;
    width:100%; 
  }
 }

 @media only screen and (min-width:376px) and (max-width:415px) {
  #PagConstruct{
    height: 638px;
    width:100%; 
  }
 }

 @media only screen and (min-width:425px) and (max-width:768px) {
  #PagConstruct{
    height: 638px;
    width:100%; 
  }
 }

  #LineConte{
    justify-content: center;
    margin-bottom: 25px;
    margin-right: auto;
      margin-left: auto;
  }
 
 
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin-left: 10px;

}


#CardResum{
  background-color: #FFDEE9;
                  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 90%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 8px;
}

.flip-card-front {
    background-color: #bbb;
    color: black;

}



.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.flex-container > flip-card {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}


#experiencias,#contato{
    margin: 10px;
}

.ImgCard{
    width:300px;
    height:300px;
    border-radius: 8px;
}

.DescrTagP{
    text-align: center;
}

.EspacCard{
  margin: 25px;
}
 #TextCarg, #Carg,#TextDescri,#TitleDescri,#Periodo,#TextPeriodo{
  text-align: center;
 }
 @-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; } 
  }
  @-moz-keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

.EspacCard,.card {
-webkit-animation: fadeIn 3s ease-in-out;
-moz-animation: fadeIn 3s ease-in-out;
-o-animation: fadeIn 3s ease-in-out;
animation: fadeIn 3s ease-in-out;
}
 .flex-container > .NotasRodape {
  
  width: 30%;
  margin-top: 10px;
  text-align: center;
 
}

.vira-card {
  background-color: transparent;
  width: 250px;
  height: 300px;
  perspective: 1000px;
  margin: 25px;
  padding: 8px;
}

.vira-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 
}
.vira-card:hover .vira-card-inner {
  transform: rotateY(180deg);
}
.vira-card-front, .vira-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
 
}
.vira-card-front {
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
  color: black;
  
}
.vira-card-back {
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
 height: 300px;
  transform: rotateY(180deg);
 
}
</style>