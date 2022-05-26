/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import { useUser } from '../../hooks/useUser';

import {
  CarouselButton, CarouselButtonCircle, CarouselButtonCircles, Container, Content,
} from './styles';

export function CarouselProfile({ images }) {
  const [index, setIndex] = useState(1);
  const [files, setFiles] = useState([]);

  const { host } = useUser();

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

  useEffect(() => {
    if (images && images.length) {
      console.log('ping here');

      console.log(images);
      const newFiles = images.map((file) => ({
        ...file,
        filename: `${host}/files/${file.filename}`,
        active: false,
      }));

      newFiles[0].active = true;

      setFiles(newFiles);
    }
  }, [images]);

  return files.length ? (
    <Container>
      <CarouselButton className="CarouselButton" onClick={() => handlePrev()}>
        <AiOutlineArrowLeft size={24} />
      </CarouselButton>
      <Content url={files[index - 1].filename}>
        <div />
        <img src={files[index - 1].filename} alt="Teste" />
      </Content>
      <CarouselButton className="CarouselButton" onClick={handleNext} style={{ right: 0 }}>
        <AiOutlineArrowRight size={24} />
      </CarouselButton>

      <CarouselButtonCircles>
        {
            files.map((file, i) => (
              <CarouselButtonCircle key={file.filename} onClick={() => handleCircleButton(i)}>
                <FaCircle color={file.active ? '#fff' : '#dddada'} size={10} />
              </CarouselButtonCircle>
            ))
          }
      </CarouselButtonCircles>
    </Container>
  ) : null;
}
