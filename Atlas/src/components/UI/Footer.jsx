import React from 'react'
import footerContact from '../../Api/FooterApi.json'
import {MdPlace} from "react-icons/md" ;
import {IoCallSharp } from "react-icons/io5"
import { TbMailPlus } from "react-icons/tb" ;

export const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className='bg-[#151414]'>
      <div className=" flex justify-evenly items-center   ">
        
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact flex items-center " key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      
      </div>
    </footer>
  )
}
