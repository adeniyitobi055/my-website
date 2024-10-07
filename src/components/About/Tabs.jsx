import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import LinkIcon from "../../ui/LinkIcon";

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: var(--color-grey-700);

  @media screen and (max-width: 425px) {
    gap: 10px;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-top: 13px; */
  font-size: 15px;

  & span {
    font-size: 15px;
    color: var(--color-gold-100);
    font-weight: 500;
  }

  & ul {
    height: 230px;
    max-width: 400px;
    word-wrap: break-word;
  }

  & li {
    padding-top: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12.3px;

    & span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 425px) and (min-width: 375px) {
    font-size: 13.5px;

    & span {
      font-size: 14px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 425px) {
    gap: 13px;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: left;
  align-items: center;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gold-100);
  }

  & a:hover {
    color: var(--color-red-700);
  }

  @media screen and (max-width: 425px) {
  }
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
          disabled={activeTab === "skills"}
        >
          Skills
        </Button>
        <Button
          variation={activeTab === "education" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("education")}
          disabled={activeTab === "education"}
        >
          Education
        </Button>
        <Button
          variation={activeTab === "experience" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("experience")}
          disabled={activeTab === "experience"}
        >
          Experience
        </Button>
        <Button
          variation={activeTab === "certification" ? "danger" : "primary"}
          size="small"
          onClick={() => setActiveTab("certification")}
          disabled={activeTab === "certification"}
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
              Design, create a scalable database & implement complex APIs
            </li>
          </ul>
        </TabContent>
      )}
      {activeTab === "education" && (
        <TabContent>
          <ul>
            <li>
              <span>ALX - Holberton School || Nov 30, 2023</span>
              <br />
              <Div>
                Full-Stack Software Engineering{" "}
                <a
                  href="https://www.alxafrica.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
            <li>
              <span>Adeleke University || July 19, 2020</span>
              <br />
              <Div>
                B.Sc Computer Science{" "}
                <a
                  href="https://adelekeuniversity.edu.ng/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
          </ul>
        </TabContent>
      )}
      {activeTab === "experience" && (
        <TabContent>
          <ul>
            <li>
              <span>First Bank of Nigeria LTD || May 2024</span>
              <br />
              <Div>
                Software Developer - Frontend
                <a
                  href="https://www.firstbanknigeria.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
            <li>
              <span>Euro Scholars Poland || Nov 2021 - Mar 2022</span>
              <br />
              <Div>
                Technical Support
                <a
                  href="https://euroscholars.pl/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
            <li>
              <span>First Bank of Nigeria LTD || Feb 2019 - Sep 2019</span>
              <Div>
                Intern
                <a
                  href="https://www.firstbanknigeria.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
          </ul>
        </TabContent>
      )}
      {activeTab === "certification" && (
        <TabContent>
          <ul>
            <li>
              <span>Freecodecamp || Aug 2, 2023</span>
              <Div>
                Responsive Web Design
                <a
                  href="https://www.freecodecamp.org/certification/Adeniyi_Tobi/responsive-web-design"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
            <li>
              <span>Freecodecamp || Aug 16, 2023</span>
              <Div>
                JavaScript Algorithms & Data Structures
                <a
                  href="https://www.freecodecamp.org/certification/Adeniyi_Tobi/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
            <li>
              <span>Freecodecamp || Sep 15, 2023</span>
              <Div>
                Frontend Development Libraries
                <a
                  href="https://www.freecodecamp.org/certification/Adeniyi_Tobi/front-end-development-libraries"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <LinkIcon />
                </a>
              </Div>
            </li>
          </ul>
        </TabContent>
      )}
    </Tab>
  );
}

export default Tabs;
