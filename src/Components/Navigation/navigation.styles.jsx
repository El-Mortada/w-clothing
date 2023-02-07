import { Link } from "react-router-dom";
import Styled from "styled-components";

export const NavigationContainer = Styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

export const LogoContainer = Styled.div`
height: 100%;
width: 70px;
padding: 25px;
`;

export const NavLinks = Styled.div`
     width: 50%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;

`;

export const NavLink = Styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
