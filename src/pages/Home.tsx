import styled from "styled-components";
import headshot from "src/assets/img.jpg";

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

export default function Home() {
  return (
    <Main>
      <h2>Welcome</h2>
      <img src={headshot} alt="Alexia" />
      <p>
        My name is <strong>Alexia Kim</strong>. I'm a senior at Boston University
        double majoring in Computer Science and Business Administration, with a
        concentration in Information Systems. I'm passionate about building
        technology that is impactful and customer-centric, combining thoughtful
        design with practical outcomes to solve real problems.
      </p>
      <p>
        I’ve developed full-stack web apps using Next.js, Firebase, and
        TypeScript, and built mobile features in Flutter for personalized and
        social experiences. I also work across open-source tools and cloud
        platforms like Vercel, Git, and Docker to deploy fast, modular products.
      </p>
      <p>
        On the strategy side, I’ve supported go-to-market planning, pricing, and
        product positioning as a Marketing TA and Core Challenge winner. I thrive
        in cross-functional environments where design, data, and business thinking
        come together.
      </p>
    </Main>
  );
}
