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
    // <footer className='bg-[#151414]'>
      <div className=" flex justify-evenly items-center bg-[#151414] text-md text-white w-ful gap-5  ">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact flex items-center " key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="">
                <p className='text-3xl font-bold'>{title}</p>
                <p className='text-lg font-semibold'>{details}</p>
              </div>
            </div>
          );
        })}     
      </div>
    // </footer>
  )
}
