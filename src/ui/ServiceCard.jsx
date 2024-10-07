import styled from "styled-components";

const ServiceLayout = styled.div`
  background: var(--color-grey-800);
  width: 100%;
  padding: 40px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 10px;
  transition: background 0.5s, transform 0.5s;
  margin: auto;
  color: var(--color-grey-0);

  & h3 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  & p {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  & a {
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin-top: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--color-red-700);
    transform: translateY(-10px);
    color: white;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 20px;
    font-size: 6.5px;

    & h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    & p {
      font-size: 12px;
      margin-bottom: 5px;
    }

    & a {
      font-size: 10px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    width: 100%;
    padding: 25px;
    font-size: 8px;

    & h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    & p {
      font-size: 15px;
      margin-bottom: 7px;
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    padding: 30px;

    & h3 {
      font-size: 22px;
      margin-bottom: 12px;
    }

    & p {
      font-size: 12px;
      margin-bottom: 12px;
    }
  }
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 35px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 40px;
    margin-bottom: 25px;
  }
`;

function ServiceCard({ icon, title, description, linkText, link }) {
  return (
    <ServiceLayout>
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopner noreferrer">
        {linkText}
      </a>
    </ServiceLayout>
  );
}

export default ServiceCard;
