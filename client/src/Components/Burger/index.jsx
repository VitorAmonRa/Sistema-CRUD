import React from 'react';

import { IconDiv } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { SideBar } from '../../Components/SideBar'


export const Burger = () => {
  const [open, setOpen] = useState(false)

  return(
    <>
     <IconDiv>
          <button open={open} onClick={() => setOpen(!open)}>
            <GiHamburgerMenu/>
          </button>
        </IconDiv>
        <SideBar open={open}/>
    </>
  )
}
