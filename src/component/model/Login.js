"use client";
import React from "react";
import { useState } from "react";
import { Button, Modal } from "@nextui-org/react";
import { Fragment, useRef } from "react";
import Icon from './../../assets/icon/login-icon.svg'
import Image from "next/image";
import Link from "next/link";

const Login = ({ loginMOdel, children, show, setOpen, title, subtitle, numberLink, SignupIcon, className, name }) => {
  //   const cancelButtonRef = useRef(null);

  return (
    <Fragment>
      <Modal
        as={Fragment}
        closeButton
        blur
        open={show}
        onClose={setOpen}
      >
        {/* <Modal.Header></Modal.Header> */}
        <Modal.Body>
          <div className=" bg-white">
          <div className="text-center">
            {name &&
              <div className="text-left border-b border-[#D0D5DD] pb-3">
                <h3 className="font-semibold leading-tight">{name}</h3>
              </div>
            }
            <>
              <div className={`border-[#EAECF0] border inline-block p-[14px] rounded-[10px] ${className}`}>
                {SignupIcon ?
                  <Image src={SignupIcon} alt="" className="mx-auto" />
                  :
                  <Image src={Icon} alt="Login_Icon" className="mx-auto" />
                }
              </div>
            </>
            {loginMOdel === true &&
            <>
            <h2 className="text-primary-black font-bold text-lg md:pt-4 pt-2 pb-1">{title}</h2>
            <h3 className="text-[#444444] xsm:text-sm text-xs">{subtitle}</h3>
            <div className="text-end pr-12">
              <Link href={"#0"} className="text-xs text-[#4541FF]">{numberLink}</Link>
            </div>
            </>            
            }
          </div>
          {children}
          </div>
        </Modal.Body>
        {/* <Modal.Footer /> */}
      </Modal>
    </Fragment>
  );
};

export default Login;
