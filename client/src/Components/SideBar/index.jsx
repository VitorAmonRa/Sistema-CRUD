import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrUserAdmin, GrHome } from 'react-icons/gr'

import { Menu } from './styles';

export const SideBar = ({open}) => {
  const navigate = useNavigate();


  const handleSwitchAdmin = () => {
    navigate("/", {replace:true})
  }
  const handleSwitchPreview = () => {
    navigate("/PreviewPage", {replace:true})
  }
  const handleSwitchSpreader = () => {
    navigate("/PreviewSpreaderPage", {replace:true})
  }
  return (
    <>
      <Menu open={open}>
        <div >
          <button onClick={handleSwitchAdmin}><GrUserAdmin/><span>Admin</span></button>
        </div>
        <div>
         <button onClick={handleSwitchPreview}>
          <span>Preview Page</span>
        </button>
        </div>
        <div>
         <button onClick={handleSwitchSpreader}>
          <span>Spreader Page</span>
        </button>
        </div>
      </Menu>
    </>
  )
}
