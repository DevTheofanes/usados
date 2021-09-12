import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { FiMousePointer, FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { TiRssOutline } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';

import { 
  Container, 
  Content,
  Ratings,
  RatingsHeader,
  RatingsStars,
  RatingsLinks,
  SideBar,
  SideBarContent,
  SideBarInfo,
  SideBarInfoTitle,
  SideBarPerfilImage,
  TopBarColor,
  RatingsStarsBox,
  RatingsList,
  RatingItem,
  RatingItemHeader,
  RatingItemUserInfos,
  RatingItemUserInfosContent,
  RatingItemHeaderAvatar, 
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { PaginationButtonsComponent } from '../../components/PaginationButtons';
import { PublicityFooter } from '../../components/PublicityFooter';

export function RatingsPage() {
  return (
    <Container>
      <HeaderLoggedComponent />
      <TopBarColor />
      <Content>
        <SideBar>
          <SideBarPerfilImage>
            <img src="https://images.unsplash.com/photo-1631287381310-925554130169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="" />
            <h3>MercadoCar</h3>
            <span>A melhor loja para seus carros</span>
          </SideBarPerfilImage>

          <SideBarContent>
            <SideBarInfo>
              <SideBarInfoTitle>
                <AiOutlineUser size={20} color="#000" />
                Conta Premium
              </SideBarInfoTitle>
              <p>Desde 2021</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <FiMousePointer size={20} color="#000" />
                Sobre
              </SideBarInfoTitle>
              <p>Mais uma venda bem sucedida feita aqui na Macedor Car! Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo quer ter essa experiência e sair de um carro novo pagando pouco?</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <GrLocation size={20} color="#000" />
                Endereço
              </SideBarInfoTitle>
              <p>
                Av. Franscisco, Caldeira Castelo <br/>
                Branco, 1876, - Fatima, Belém, <br/>
                PA, 66063-223
              </p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <TiRssOutline size={20} color="#000" />
                Site
              </SideBarInfoTitle>
              <p>www.marcedocar.com.br</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <FiMail size={20} color="#000" />
                E-mail
              </SideBarInfoTitle>
              <p>vendas@mercadocar.com</p>
            </SideBarInfo>
          </SideBarContent>
        </SideBar>
        <Ratings>
          <RatingsHeader>
            <RatingsStarsBox>
              <RatingsStars>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarHalf color="#f2be17" size={24}/>
                <BsStar color="#f2be17" size={24}/>
              </RatingsStars>
            </RatingsStarsBox>

            <RatingsLinks>
              <a href="#">Classificados</a>
              <IoIosArrowForward color="#1a1e3a" size={14} />
              <a href="#">Perfil do vendedor</a>
            </RatingsLinks>
          </RatingsHeader>

          <RatingsList>
            <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>
            <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>
          
            <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>

            <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>

                      <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>

                      <RatingItem>
              <RatingItemHeader>
                <RatingItemHeaderAvatar>
                 <img src="https://images.unsplash.com/photo-1631187512153-807144860f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="nome user" />
                </RatingItemHeaderAvatar>
                <RatingItemUserInfos>
                  <AiOutlineUser size={20} />
                  <RatingItemUserInfosContent>
                    <strong>João Guilherme</strong>
                    <div>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarFill color="#f2be17" size={16}/>
                      <BsStarHalf color="#f2be17" size={16}/>
                      <BsStar color="#f2be17" size={16}/>
                    </div>
                  </RatingItemUserInfosContent>
                </RatingItemUserInfos>
              </RatingItemHeader>

              <p>Vendedor atencioso, todo o processo foi bem transparente. Estou feliz com a aquisição.</p>
            
              <label>Obrigado Sr. João pela confiança, estamos sempre a disposição.</label>
            
              <span>Resposta do vendedor</span>
            </RatingItem>
          </RatingsList>

          <PaginationButtonsComponent/>
        </Ratings>
      </Content>
      <PublicityFooter/>
      <FooterComponent />
    </Container>
  );
}
