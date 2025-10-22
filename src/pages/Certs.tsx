import styled from "styled-components";

const Main = styled.main`

    min-height: 100vh;
    /* width: 70%; */
    padding: 20px;
    /* background-color: #ffffff; */


  .container{
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    min-height: 100vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display:flex;
    flex-direction:column;
}
    img {
    width: 200px;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

ul {
    margin: 15px 0;
    padding-left: 20px;
}

li {
    margin-bottom: 8px;
    line-height: 1.6;
}

h2 {
    color: #000000;
    font-size: 28px;
    margin-bottom: 20px;
    border-bottom: 2px solid #F5CAC3;
    padding-bottom: 10px;
}

h3 {
    color: #000000;
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 10px;
}

h4 {
    color: #000000;
    font-size: 18px;
    margin-bottom: 5px;
}

@media (min-width: 751px) {
     width: 70%;

     .container {
        display: flex;
        flex-direction: column;
    }

    #wrapper {
        display: flex;
    }

}

@media (max-width: 750px) {

    width: 100%;
    .container {
        display: flex;
        flex-direction: column;
    }

@media (max-width: 1000px) {

    width: 100%;

}
`;

export default function Certs() {
  return (
    <Main>
      <h2>Certificates</h2>
      <h3>Professional Scrum Master I</h3>
      <h3>Kaggle - Intermediate Machine Learning</h3>
      <h3>Kaggle - Advanced SQL</h3>
      <h3>Kaggle - Data Visualization</h3>
      <h3>Google - Foundations of Cybersecurity</h3>
      <h3>IBDP International Baccalaureate Diploma</h3>
      <h3>IGCSE International General Certificate of Secondary Education</h3>
    </Main>
  );
}
