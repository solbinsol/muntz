import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/Login.module.css'
import Link from 'next/link'
import ClosetBox from '@/component/ClosetBox'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import NewProduct from '@/component/MP/NewProduct'
import BestItem from '@/component/MP/BestItem'
import AllProduct from '@/component/MP/AllProduct'
import React, { useState } from 'react';
import axios from 'axios';
export default function Login() {

    return(
        <div className={style.Login}>
            <Header></Header>
            <div className={style.LoginPage}>
                <div className={style.LoginBox}>
                    <h3>muntz</h3>
                    <input className={style.ID} placeholder='ID'/>
                    <input className={style.PW} placeholder='PW'/>
                    <button className={style.btnLogin}>LOGIN</button>
                    <div className={style.BottomBtn}>
                        <button className={style.btnKL}><img src="./image/kakao2.png"></img></button>
                        <button className={style.btnSignUp}>SignUp</button>
                    </div>
                    <div className={style.TT}>
                        <p>아이디 찾기</p><p className={style.R}>비밀번호 찾기</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}