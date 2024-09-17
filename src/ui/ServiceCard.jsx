import styled from "styled-components";

const ServiceLayout = styled.div`
  background: var(--color-grey-700);
  width: 95%;
  padding: 40px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 10px;
  transition: background 0.5s, transform 0.5s;
  margin: auto;
  color: var(--color-grey-0);
  height: 100%;

  & h3 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  & p {
    font-size: 15px;

    margin-bottom: 10px;
  }

  & a {
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
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
