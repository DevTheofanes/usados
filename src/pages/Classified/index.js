import React from 'react';
import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';

import { 
  ClassifiedsBox,
  ClassifiedsContent,
  ClassifiedsContentIcon,
  ClassifiedsContentImage,
  ClassifiedsContentInfoLine,
  ClassifiedsContentInfos,
  ClassifiedsLinks,
  ClassifiedsLinksSeePhotos,
  ClassifiedsLinksWhatsapp,
  ClassifiedsPagesButton,
  ClassifiedsPagesButtonsContainer,
  ClassifiedsPagesQuantity,
  Container, 
  Content, 
  ContentClassifieds, 
  FiltersItem, 
  FiltersTitle, 
  SideBand,
  SideBandFilters,
  SideBandPublicity,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundBanner.jpg'

export function ClassifiedsPage() {
  return (
    <Container>
      <HeaderLoggedComponent />

      <Content>
        <SideBand>
          <SideBandFilters>
            <FiltersTitle>
              <BiFilterAlt color="#1a1e3a"/>
              <h3>Filtros</h3>
            </FiltersTitle>

            <FiltersItem>
              <span>Selecione um estado</span>
              <select name="" id="">
                <option value="a">São Paulo</option>
              </select>
            </FiltersItem>

            <FiltersItem>
              <span>Selecione uma opção</span>
              <select name="" id="">
                <option value="a">Novos</option>
                <option value="a">Usados</option>
              </select>
            </FiltersItem>
          </SideBandFilters>

          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>

          
          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>

          
          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>
        </SideBand>

        <ContentClassifieds>
          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>

          <ClassifiedsBox>
            <ClassifiedsContent>
              <ClassifiedsContentImage>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
              </ClassifiedsContentImage>

              <ClassifiedsContentInfos>
                <ClassifiedsContentIcon>
                  <AiOutlineHeart />
                </ClassifiedsContentIcon>

                <ClassifiedsContentInfoLine>
                  <h1>
                    Honda Civic Ex 2.0
                    <br/>
                    Lojista Honda Motors
                  </h1>

                  <strong>
                    Hoje
                    <br/>
                    14h20
                  </strong>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                  </p>

                  <span>
                    Avaliações
                    <br/>
                    <strong>24</strong>
                  </span>
                </ClassifiedsContentInfoLine>

                <ClassifiedsContentInfoLine>
                  <h1>
                    R$ 45.000,00
                  </h1>

                  <span>
                    Localização
                    <br/>
                    <strong>São Paulo</strong>
                  </span>
                </ClassifiedsContentInfoLine>

              </ClassifiedsContentInfos>
            </ClassifiedsContent>
          
            <ClassifiedsLinks>
              <ClassifiedsLinksSeePhotos>
                <a href="#">Ver Galeria de Fotos</a>
              </ClassifiedsLinksSeePhotos>

              <ClassifiedsLinksWhatsapp>
                <a href="#">Whatsapp</a>
              </ClassifiedsLinksWhatsapp>
            </ClassifiedsLinks>
          </ClassifiedsBox>
        
          <ClassifiedsPagesButtonsContainer>
            <ClassifiedsPagesButton>
              <AiOutlineArrowLeft color="#fff" size={12}/>
              Pagina Anterior
            </ClassifiedsPagesButton>

            <ClassifiedsPagesQuantity>
              1
            </ClassifiedsPagesQuantity>

            <ClassifiedsPagesButton>
              Proxima Pagina
              <AiOutlineArrowRight color="#fff" size={12}/>
            </ClassifiedsPagesButton>
          </ClassifiedsPagesButtonsContainer>
        </ContentClassifieds>
      </Content>

      <FooterComponent />
    </Container>
  );
}
