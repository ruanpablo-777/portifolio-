import React from "react";
import styled from "styled-components";

const Main = styled.div`
@font-face {
    font-family: "hacker";
    src: url("../public/hacker.ttf") format("truetype");
}
`

const Tittle = styled.div`
color: #156067;
text-align: center;
margin-top: 10px;
font-family: "hacker";
font-size: 50px;
margin-top: 40px;

@media (max-width: 450px) {
    font-size: 30px;
}
`

const BodyContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr  ;
width: 95vw;
max-width: 800px;
margin: 60px auto;

justify-items: center;
padding: 10px;

 @media (max-width: 833px) {
    max-width: 400px;
grid-template-columns: 1fr 1fr;
grid-row-gap: 30px;

@media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
}

    
}


`
const DivContent = styled.div`
display: grid;
grid-template-columns: 150px 200px;
grid-gap: 10px;
justify-items: auto;
`
const Content = styled.div`
filter: grayscale(100%);
opacity: 0.5;

&:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: 0.5s ease;
    opacity: 1;    
}

@media screen and (max-width:450px){
    opacity: 1;
    filter: grayscale(0%);
}
`

const DivImg = styled.img`
width: 150px;
height: 250px;
border-radius: 10px;

@media (max-width:450px) {
    width: 250px;
    height: 350px
}


`
const Paragrafo = styled.div`
color: white;
text-align: center;
font-size: 13px;
font-family: "hacker";

`
const Cont = styled.div`
display: flex;
justify-content: center;
margin: 10px;
`
const Img = styled.img`
width: 20px;
height: 20px;
display: block;
`

const About = () => {
    return (
        <Main>
            <Tittle>MEUS PROJETOS</Tittle>

            <BodyContent>

                
                    <a href="https://ruanpablo-777.github.io/Portifolio/previs%C3%A3o%20do%20tempo/" target="_blank">
                        <Content >
                            <DivImg className="im" src="../public/tempo.png"></DivImg>
                            <Paragrafo>
                                PREVISAO DO TEMPO
                            </Paragrafo>
                                <Cont>
                                <Img src="../public/html-5.png" ></Img>
                                <Img src="../public/css-3.png"></Img>
                                <Img src="../public/js.png"></Img>
                                </Cont>
                        </Content>
                    </a>

                    <a href="https://ruanpablo-777.github.io/projeto-android/" target="_blank">
                        <Content>
                            <DivImg src="../public/android.png"></DivImg>
                            <Paragrafo>
                                PROJETO ANDROID
                            </Paragrafo>
                            <Cont>
                                <Img src="../public/html-5.png"></Img>
                                <Img src="../public/css-3.png"></Img>
                                <Img src="../public/js.png"></Img>
                            </Cont>
                        </Content>
                    </a>

                

               
                    <Content>
                        <DivImg src="../public/tempo.png"></DivImg>
                        <Paragrafo>

                        </Paragrafo>
                    </Content>

                    <Content>
                        <DivImg src="../public/tempo.png"></DivImg>
                        <Paragrafo>

                        </Paragrafo>
                    </Content>

                

            </BodyContent>
        </Main>
    )
}

export default About