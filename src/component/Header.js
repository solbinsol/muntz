import Link from 'next/link'
import style from '@/styles/Header.module.css'

export default function Hader(){
    return(
        <div className={style.header}>
            <div className={style.LogoBox}>
            <Link href="/">
                <img className={style.LogoImg} src="image/logo.jpg"/>
                <span className={style.Logo}>muntz</span>
            </Link>
            </div>
            <div className={style.MenuBox}>
            <ul className={style.Menu}>
                <Link href="/categorypage?categoryNo=1"><li>Outer</li></Link>
                <Link href="/categorypage?categoryNo=2"><li>Top</li></Link>
                <Link href="/categorypage?categoryNo=3"><li>Bottom</li></Link>
                <Link href="/categorypage?categoryNo=4"><li>Acc</li></Link>
            </ul>
            <ul className={style.RMenu}>
                <li className={style.SU}>/SignUp</li>
                <li>Login</li>
                <li className={style.Serch}>○</li>
 
            </ul>
            </div>
        </div>
    )
}
