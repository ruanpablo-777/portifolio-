import React from "react";
import "./navbar.css"
import styled from "styled-components"

    
    
const Content = styled.main`
@font-face {
    font-family: "hacker";
    src: url("/hacker.ttf") format("truetype");
}
color: #002431;
font-family: "hacker";
font-size: 60px;
width: 400px;


`
const HomeWepper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 75vh;
& .content_ {
    color: #afe9fe;
}


`
const DivContent = styled.div`
margin: auto;
backdrop-filter: blur(1px);
border-radius: 300px;
text-align: center;
`


const Home = () => {
    
    

    return (
        <HomeWepper>

        <DivContent>
            <Content>BEM VInDo</Content>
        </DivContent>
        
        

        </HomeWepper>
       
 

    )
}

export default Home