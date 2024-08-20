import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-top: 13px; */
  font-size: 16px;

  & span {
    font-size: 15px;
    color: var(--color-gold-100);
  }

  & ul {
    height: 230px;
  }

  & li {
    padding-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

function Tabs() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <Tab>
      <ButtonContainer>
        <Button
          variation={activeTab === "skills" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </Button>
        <Button
          variation={activeTab === "education" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("education")}
        >
          Education
        </Button>
        <Button
          variation={activeTab === "experience" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </Button>
        <Button
          variation={activeTab === "certification" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("certification")}
        >
          Certification
        </Button>
      </ButtonContainer>
      {activeTab === "skills" && (
        <TabContent>
          <ul>
            <li>
              <span>Software Development</span>
              <br />
              Develop scalable, future-proof software applications.
            </li>
            <li>
              <span>JavaScript (React || Node)</span>
              <br />
              Develop complex web applications
            </li>
            <li>
              <span>MySQL || Postgress</span>
              <br />
              Design & Create a scalable database
            </li>
          </ul>
        </TabContent>
      )}
      {activeTab === "education" && (
        <TabContent>
          <ul>
            <li>
              <span>ALX</span>
              <br />
              Software Engineering
            </li>
          </ul>
        </TabContent>
      )}
      {activeTab === "experience" && (
        <TabContent>
          <ul></ul>
        </TabContent>
      )}
      {activeTab === "certification" && (
        <TabContent>
          <ul></ul>
        </TabContent>
      )}
    </Tab>
  );
}

export default Tabs;
