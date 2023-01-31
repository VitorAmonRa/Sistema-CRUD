import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrUserAdmin, GrHome } from 'react-icons/gr'

import { Menu } from './styles';

export const SideBar = ({open}) => {
  const navigate = useNavigate();


  const handleSwitchAdmin = () => {
    navigate("/", {replace:true})
  }
  const handleSwitchHome = () => {
    navigate("/", {replace:true})
  }
  return (
    <>
      <Menu open={open}>
        <div className='main'>
          <button onClick={handleSwitchAdmin}><GrUserAdmin/><span>Admin</span></button>
        </div>
      </Menu>
    </>
  )
}
