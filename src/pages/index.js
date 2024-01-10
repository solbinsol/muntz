import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/MainPage.module.css'
import Link from 'next/link'
import ClosetBox from '@/component/ClosetBox'
import Footer from '@/component/Footer'
import NewProduct from '@/component/MP/NewProduct'
import BestItem from '@/component/MP/BestItem'
import AllProduct from '@/component/MP/AllProduct'
export default function Home() {
  return (
    <div className={style.MainPage}>
      <div className={style.header}>
          <div className={style.LogoBox}>
            <Link href="/">
              <img className={style.LogoImg} src="image/logo.jpg"/>
              <span className={style.Logo}>muntz</span>
            </Link>
          </div>
          <div className={style.MenuBox}>
            <ul className={style.Menu}>
              <li>Outer</li>
              <li>Top</li>
              <li>Bottom</li>
              <li>Acc</li>
            </ul>
          </div>
      </div>
      <div className={style.MainContent}>
        <div className={style.MainImg}>
          <img src='image/testMain.jpg'/>
        </div>
        <div className={style.BestItem}>
          <BestItem></BestItem>          
        </div>
        <div className={style.NewProduct}>
          <NewProduct></NewProduct>          
        </div>
        <div className={style.NewProduct}>
          <AllProduct></AllProduct>
        </div>
        <div className={style.FooterBox}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
