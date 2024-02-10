import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from './Admin.module.css'
import Link from 'next/link'
import ClosetBox from '@/component/ClosetBox'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import NewProduct from '@/component/MP/NewProduct'
import BestItem from '@/component/MP/BestItem'
import AllProduct from '@/component/MP/AllProduct'
import ProductAdd from '@/component/AD/ProductAdd'

export default function Admin() {
  return (
    <div className={style.Admin}>
      <Header></Header>
        <div className={style.AdminPage}>

            <div className={style.AdminBox}>
                <div className={style.AdminMenu}>
                    <ul>
                        <li>옷추가</li>
                        <li>옷삭제</li>
                    </ul>
                    <div className={style.WorkScreen}>
                        <ProductAdd></ProductAdd>
                    </div>
                </div>
            </div>
        </div>
      <Footer></Footer>

    </div>
  )
}
