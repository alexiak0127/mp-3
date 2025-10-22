import styled from "styled-components";
import Calculator from "../components/Calculator";

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

export default function Projects() {
  return (
    <Main>
      <section>
        <h2>Projects</h2>

        <h3>EarningsWhisperer – AI Reads Earnings Reports So You Don’t Have To</h3>
        <ul>
          <li>
            Built an end-to-end stock movement prediction pipeline for major tech
            companies, integrating transformer-based sentiment analysis (RoBERTa)
            on SEC 8-K reports with technical indicators such as Relative Strength
            Index to classify post-earnings stock movements
          </li>
          <li>
            Achieved 94.4% accuracy with XGBoost, outperforming a random baseline
            of ~33%; engineered and tested classical models including Random Forest
            and deep learning models such as Feedforward and Convolutional Neural
            Networks for improved signal capture
          </li>
        </ul>

        <h3>
          Cross Functional Core Project, Core Challenge Winner (Ranked 1st of 91 Teams)
        </h3>
        <ul>
          <li>
            Developed a business plan and created deliverables for a consumer travel
            accessories product in a cross-functional team of ten, integrating finance,
            marketing, operations, and data analytics for data-backed product launch
          </li>
          <li>
            Conducted market research to formulate product strategy by identifying trends
            and customer needs, segmenting the target market, analyzing competitors,
            positioning the product, and gathering user feedback through surveys and interviews
          </li>
          <li>
            Led the data analytics sub-team in performing sensitivity and simulation analyses
            using Excel to project costs associated with the launch of the proposed product,
            mitigating quantitative and qualitative risks by devising strategic plans
          </li>
        </ul>

        <Calculator />
      </section>
    </Main>
  );
}
