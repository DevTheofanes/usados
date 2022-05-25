import React from 'react';
// import { FiCheckSquare } from 'react-icons/fi';

import {
  Container,
  Page,
  Content,
  ContentColumn,
  SacTitle,
  SacSubTitle,
  SacQuest,
  ContentSac,
  ContentFooter,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundBanner.jpg';
// import LogoIconImage from '../../assets/logo/iconWhite.png';

export function SacPage() {
  return (
    <Container>
      <HeaderComponent height="16rem" />
      <Page backgroundImage={BackgroundBanner}>
        <Content>
          <ContentSac>
            <ContentColumn>
              <SacTitle>
                SAC
              </SacTitle>

              <p>
                Atendimento das 8h as 18hs ou se
                {' '}
                <br />
                preferir entre em contato pelo fone
                {' '}
                <br />
                0800 0000 000
              </p>

              <SacSubTitle>
                Perguntas Frequentes
              </SacSubTitle>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>
            </ContentColumn>

            <ContentColumn>
              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>

              <SacQuest>
                <strong>Como anunciar? Como impulsionar?</strong>
                <span>R: Sua resposta.</span>
              </SacQuest>
            </ContentColumn>
          </ContentSac>

          <ContentFooter>
            <h2>Dúvidas?</h2>
            <p>
              Entre em contato conosco das 8h00 às
              {' '}
              <br />
              18h pelo fone 0800 000 000
            </p>
          </ContentFooter>
        </Content>
      </Page>
      <FooterComponent />
    </Container>
  );
}
