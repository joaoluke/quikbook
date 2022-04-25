import Image from 'next/image';

import logo from '../../public/logo.png';
import { TextComponent } from '../text/Text';

import * as Style from './style';

export const Navbar = ({ logout }) => (
  <Style.Container>
    <Image alt="Quik logo" src={logo} width={50} height={50} />
    <TextComponent padding="0 18px" fontSize="31px" color="#4ac5ff">
      Quik Book
    </TextComponent>
    <div className='logout' onClick={logout}>Sair</div>
  </Style.Container>
);
