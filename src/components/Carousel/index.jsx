/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';

import {
  CarouselButton,
  CarouselButtonCircle,
  CarouselButtonCircles,
  Container,
  ContainerMain,
  ContainerThumbnails,
  Content,
  Thumbnail,
} from './styles';

export function Carousel() {
  const [index, setIndex] = useState(1);
  const [files, setFiles] = useState([
    {
      active: true,
      filename:
        'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
    },
    {
      active: false,
      filename:
        'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg',
    },
    {
      active: false,
      filename:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3GpTZ6z7zml3eWQkBPqvpNE7KYFcRoBUrnOYiKGHVTjX6SqVKn_sujE8pJ1gu2bNElc&usqp=CAU',
    },
    {
      active: false,
      filename:
        'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      active: false,
      filename:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      active: false,
      filename:
        'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
    },
    {
      active: false,
      filename:
        'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
    },
  ]);

  function handlePrev() {
    const disableAllFiles = files.map((file) => ({
      filename: file.filename,
      active: false,
    }));

    if (index === 1) {
      disableAllFiles[files.length - 1].active = true;
      setFiles(disableAllFiles);
      return setIndex(files.length);
    }

    disableAllFiles[index - 2].active = true;
    setFiles(disableAllFiles);

    setIndex(index - 1);
  }

  function handleNext() {
    const disableAllFiles = files.map((file) => ({
      filename: file.filename,
      active: false,
    }));

    if (index === files.length) {
      disableAllFiles[0].active = true;
      setFiles(disableAllFiles);
      return setIndex(1);
    }

    disableAllFiles[index].active = true;
    setFiles(disableAllFiles);
    setIndex(index + 1);
  }

  function handleCircleButton(i) {
    const disableAllFiles = files.map((file) => ({
      filename: file.filename,
      active: false,
    }));
    disableAllFiles[i].active = true;
    setFiles(disableAllFiles);
    setIndex(i + 1);
  }

  return (
    <Container>
      <ContainerMain>
        <CarouselButton className="CarouselButton" onClick={() => handlePrev()}>
          <AiOutlineArrowLeft size={24} />
        </CarouselButton>
        <Content url={files[index - 1].filename}>
          <div />
          <img src={files[index - 1].filename} alt="Teste" />
        </Content>
        <CarouselButton
          className="CarouselButton"
          onClick={handleNext}
          style={{ right: 0 }}
        >
          <AiOutlineArrowRight size={24} />
        </CarouselButton>

        <CarouselButtonCircles>
          {files.map((file, i) => (
            <CarouselButtonCircle
              key={file.filename}
              onClick={() => handleCircleButton(i)}
            >
              <FaCircle color={file.active ? '#fff' : '#dddada'} size={10} />
            </CarouselButtonCircle>
          ))}
        </CarouselButtonCircles>
      </ContainerMain>

      <ContainerThumbnails>
        {files.map((file, i) => (
          <Thumbnail
            key={file.filename}
            url={file.filename}
            active={file.active}
            onClick={() => handleCircleButton(i)}
          />
        ))}
      </ContainerThumbnails>
    </Container>
  );
}
