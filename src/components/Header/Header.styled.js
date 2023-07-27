import styled from 'styled-components';

export const Container =styled.div`
/* padding: 20px; */
padding-left: 50px;
padding-right: 50px;
margin-right:auto;
margin-left:auto;
/* margin-top:30px; */
/* width:1200px; */
font-size: 16px;
font-weight:700;
background-color:  ${p => p.theme.colors.colorPink};
/* background-color: ${p => p.theme.colors.colorBgSecond}; */
/* background: radial-gradient(ellipse farthest-corner, #ffc0cb 0%, #000 90%); */
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 0px 0px 20px 20px;
display:flex;
align-items: center;
justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 20px;
 color: ${p => p.theme.colors.titleMainColor};
 /* text-shadow: #671629 4px 4px 3px; */
 font-family: cursive;
`;

export const ContactItem =styled.li`
color: ${p => p.theme.colors.titleMainColor};
text-decoration: none;
font-size: 24px;
`;

export const ContactBox =styled.div`
display: block;
`;