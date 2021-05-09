import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  min-height: 50px;
  background-color: #1976d2;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1976d2;
`;

export const Body = styled.div`
  margin-top: 64px;
  flex-grow: 1;
  background-color: #f5f5f5;
`;
