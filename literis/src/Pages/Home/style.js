import styled from "styled-components";
import { Link } from "react-router-dom";

// Cores principais
const primaryColor = "rgb(67, 139, 255)";
const secondaryColor = "rgb(77, 169, 255)";
const gradient = "linear-gradient(to right, #6a11cb, #2575fc)";
const lightBackground = "rgb(247, 247, 247)";
const textColor = "#333";
const white = "#fff";

export const HomeContainer = styled.div`
  padding: 2rem;
  background-color: ${lightBackground};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: transparent;
  background: ${gradient};
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::after {
    content: "";
    width: 100px;
    height: 5px;
    background: ${gradient};
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
    animation: slideIn 1s ease-in-out;
  }

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BookGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${secondaryColor};
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BooksWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: auto;
`;

export const BookCard = styled.div`
  background: ${white};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, opacity 1s ease;
  color: ${textColor};
  position: relative;
  overflow: hidden;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "★";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    color: gold;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover::after {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const BookTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: ${primaryColor};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BookAuthor = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BookPrice = styled.p`
  font-size: 1.2rem;
  color: ${textColor};
  font-weight: bold;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DetailsButton = styled.button`
  background: ${gradient};
  color: ${white};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover::after {
    width: 0;
    height: 0;
  }

  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const SeeMoreButton = styled.button`
  background: #2575fc;
  color: ${white};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
  margin: 2rem auto;
  display: block;

  &:hover {
    background: #6a11cb;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

// Estilos para a seção de Autores
export const AuthorGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const AuthorCard = styled.div`
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: ${textColor};
  position: relative;
  overflow: hidden;
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const AuthorImage = styled.img`
  width: 200px;
  max-height: 250px;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid #6a11cb;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const AuthorName = styled.p`
  font-size: 1rem;
  color: ${textColor};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Estilos para a seção de Cupons
export const CouponGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CouponCard = styled.div`
  background: ${gradient};
  color: ${white};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Estilos para a seção de Ofertas
export const OfferGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const OfferCard = styled.div`
  background: ${white};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: ${textColor};
  position: relative;
  overflow: hidden;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const OfferTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: ${primaryColor};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const OfferPrice = styled.p`
  font-size: 1.2rem;
  color: ${textColor};
  font-weight: bold;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Estilos para a seção "Conheça a Literis"
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutCard = styled.div`
  background: ${white};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: ${textColor};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const AboutIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${primaryColor};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  color: ${textColor};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SecondaryNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
  background-color: #f8f8f8;
  border-bottom: 2px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const SecondaryNavLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: rgb(0, 93, 192);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MenuCategoryIcon = styled.span`
  font-size: 2rem;
  color: gray;

  &:hover {
    color: rgb(0, 93, 192);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CupomCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const CupomImage = styled.img`
  width: 600px;
  height: 350px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  position: relative; 

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;