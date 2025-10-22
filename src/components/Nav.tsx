import { Link } from "react-router";
import styled from "styled-components";

const NavWrap = styled.nav`
  background-color: #edc9af;

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 0%;
    margin: 0;
    padding: 0;
    background-color: #edc9af;
}

    li{
    /* border: 5px solid black; 
    border-radius: 50%; */
    border-radius: 10px;
    border-bottom: 1px solid #edc9af;
    margin:2%;
    background-color: #5D5E60;
}

    a{
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: calc(0.9rem + 0.2vw);
    color: #ffffff;
}

    a:hover {
    background-color: #edc9af;
    color: #000000;
}

@media screen and (min-width: 751px) {
    width: 30%;
    
    ul {
        width: 100%;
        flex-direction: column;
    }

}

@media screen and (max-width: 750px) {
    ul {
        flex-direction: row;
        width: 100%;
    }

    li {
        flex: 1;
        border-bottom: none;
        border-right: 1px solid #ddd;
        margin: 3px;
    }

    li:last-child {
        border-right: none;
    }

    a {
        text-align: center;
        padding: 10px 5px;
        font-size: calc(0.8rem + 0.2vw);
    }

}
`;

export default function Nav() {

  return (
    <NavWrap>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/certs">Certifications</Link></li>
        </ul>
    </NavWrap>
  );
}
