import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

type ModalLayoutProps = {
    title:string,
    children:any
}

const ModalLayout = ({title, children}:ModalLayoutProps) => {

    const navigate = useNavigate()


    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observerRefValue = modalRef.current;
        if (observerRefValue) disableBodyScroll(observerRefValue);
        return () => {
            if (observerRefValue) {
                enableBodyScroll(observerRefValue);
            }
        };
    }, []);

    return (
        <div ref={modalRef} className='fixed z-10 bg-black-alpha w-full h-dvh top-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white rounded p-5 flex-col'>
                <div className='flex justify-between items-center text-xl space-x-20'>
                    <h3>{title}</h3>
                    <FontAwesomeIcon className='cursor-pointer' onClick={() => navigate(-1)} icon={faClose} />
                </div>
                <div className='w-full py-6 px-10'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalLayout;