'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import HomeImage from '../../assets/address.png';
import HomeImageMobile from '../../assets/address_mobile.png';

const ImageHome = () => {
  const [isMobile, setIsMobile] = useState (false);

  useEffect (() => {
    const checkScreenSize = () => {
      setIsMobile (window.innerWidth < 900);
    };

    checkScreenSize ();

    window.addEventListener ('resize', checkScreenSize);

    return () => window.removeEventListener ('resize', checkScreenSize);
  }, []);

  return (
    <div className="w-full flex justify-center md:w-auto">
      <Image
        src={isMobile ? HomeImageMobile : HomeImage}
        alt="Imagem de Desenho com mapa e localização do endereço"
        title="Imagem de Desenho com mapa e localização do endereço"
        width={isMobile ? 250 : 600}
        height={isMobile ? 250 : 600}
        quality={70}
        loading="lazy"
      />
    </div>
  );
};

export default ImageHome;
