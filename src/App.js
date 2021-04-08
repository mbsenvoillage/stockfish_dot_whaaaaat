import './styles/App.css';
import Header from "./components/Header/Header";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {GlobalStyles} from "./styles/globals";
import {StyledMePageContainer} from "./components/PageContainer/MePageContainer.styled";
import {OuterContainer, TwoColContainer} from "./components/Container/Container.styled";
import {SideWaysText, TextBox, RevertText} from "./components/TextContent/TextContent.styled";
import portait from './assets/images/portrait.jpg';
import stockfish from './assets/images/stockfish-draw.png';
import Picture from "./components/Picture/Picture";
import {ImageWrapper} from "./components/Picture/Picture.styled";
import Title from "./components/Title/Title";
import SkillsList from "./components/SkillsList/SkillsList";
import {
    BiggerSub,
    ExtraBigSub,
    RightCall,
    SmallerSub,
    SpacedLetterSub,
    TitleStyled
} from "./components/Title/Title.styled";
import {useState} from "react";

function App() {
    let [front, setFront] = useState(false);
    let [back, setBack] = useState(false);

    function toggleFrontSkills() {
        return !front ?
            (<TitleStyled font="italiana" color={theme.colors.darkestnightBlue}>
            <ExtraBigSub>
                <Title><h2>front end</h2></Title>
            </ExtraBigSub>
        </TitleStyled>) : (<SkillsList front color={theme.colors.darkestnightBlue}/>);
    }

    function toggleBackSkills() {
        return !back ?
            (<TitleStyled font="italiana" color={theme.colors.darkerhatRed} >
                <ExtraBigSub>
                    <RevertText>
                        <Title><h2>back end</h2></Title>
                    </RevertText>
                </ExtraBigSub>
            </TitleStyled>) : (<SkillsList color={theme.colors.darkerhatRed} />)
    }

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
              <div className="App">
                  <Header/>
                  <StyledMePageContainer>
                      <OuterContainer>
                          <TitleStyled font="italiana" color="#ffffff">
                              <Title><h1>Hello, Yvon here</h1></Title>
                          </TitleStyled>
                          <RightCall font="italiana" color="#ffffff" padding="34%">
                              <SpacedLetterSub>
                                  <Title><p>I'm a web developer</p></Title>
                              </SpacedLetterSub>
                          </RightCall>
                      </OuterContainer>
                      <OuterContainer>
                          <TwoColContainer>
                              <SideWaysText>
                                  <p>People tend to look at things in different ways.
                                  Some angles sound better than others.
                                  Bottom line is, we all have our feet stomping
                                      the same ground.</p>
                              </SideWaysText>
                              <ImageWrapper>
                                  <Picture path={portait} altText="me"/>
                              </ImageWrapper>
                          </TwoColContainer>
                      </OuterContainer>
                      <OuterContainer>
                      <TwoColContainer align="2">
                          <TitleStyled font="italiana" color="#ffffff">
                              <Title>
                                  <h1>THIS IS ALL I KNOW.</h1>
                              </Title>
                              <Title>
                                  <SmallerSub>
                                      <p>Jack Stratton</p>
                                  </SmallerSub>
                              </Title>
                          </TitleStyled>
                          <TitleStyled font="italiana" color="#ffffff">
                              <Title>
                                  <BiggerSub>
                                      <h2>BOOGIE ON DOWN</h2>
                                  </BiggerSub>
                              </Title>
                          </TitleStyled>
                      </TwoColContainer>
                      </OuterContainer>
                      <OuterContainer justify="center" bg={theme.colors.darkerhatRed} onClick={()=>setFront(!front)}>
                          {toggleFrontSkills()}
                      </OuterContainer>
                      <OuterContainer justify="center" onClick={()=>setBack(!back)}>
                          {toggleBackSkills()}
                      </OuterContainer>
                      <OuterContainer>
                          <TwoColContainer>
                              <TextBox>
                                  <Title>
                                      <BiggerSub>
                                          <h2>I</h2>
                                      </BiggerSub>
                                  </Title>
                                  <p>Welcome, friend. Glad to see you here. Hope y'ouve enjoyed your
                                  visit on stockfish so far.</p>
                                  <p>If this place feels familiar to you, but you cannot quite explain
                                  it, Wes Anderson might. Anyway, the path to this website's been paved
                                  with some oddly shaped stones.</p>
                              </TextBox>
                              <TextBox>
                                  <Title>
                                      <BiggerSub>
                                          <h2>II</h2>
                                      </BiggerSub>
                                  </Title>
                                  <p>Let me explain. I used to play the piano, to start with. Then I went on
                                  to study Italian literature at University. Read Leopardi a fair bit. Then taught
                                  French in middle school.</p>
                                  <p>I still play my keyboard and read books, but nowadays I mostly write code</p>
                              </TextBox>
                          </TwoColContainer>
                          <TextBox>
                              <Title>
                                  <BiggerSub>
                                      <h2>III</h2>
                                  </BiggerSub>
                              </Title>
                              <p>Let me explain. I used to play the piano, to start with. Then I went on
                                  to study Italian literature at University. Read Leopardi a fair bit. Then taught
                                  French in middle school.</p>
                              <p>I still play my keyboard and read books, but nowadays I mostly write code</p>
                          </TextBox>
                      </OuterContainer>
                      <OuterContainer>
                          <ImageWrapper size="50vw">
                              <Picture path={stockfish} altText="Stockfish"/>
                          </ImageWrapper>
                      </OuterContainer>
                  </StyledMePageContainer>
              </div>
      </ThemeProvider>
  );
}

export default App;


