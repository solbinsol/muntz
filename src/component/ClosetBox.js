import React from "react";
import style from '@/styles/ClosetBox.module.css'

export default function ClosetBox(){

    return(
        <div className={style.ClosetBox}>
        <ul>
          <li>
            <img className={style.ClosetImg} src='image/test1.jpg'></img>
            <p className={style.ClosetName}>티티티셔츠</p>
            <p className={style.ClosetPrice}>백마넌 </p>
          </li>
          <li>
            <img className={style.ClosetImg} src='image/test1.jpg'></img>
            <p className={style.ClosetName}>티티티셔츠</p>
            <p className={style.ClosetPrice}>백마넌 </p>
          </li>
          <li>
            <img className={style.ClosetImg} src='image/test1.jpg'></img>
            <p className={style.ClosetName}>티티티셔츠</p>
            <p className={style.ClosetPrice}>백마넌 </p>
          </li>
          <li>
            <img className={style.ClosetImg} src='image/test1.jpg'></img>
            <p className={style.ClosetName}>티티티셔츠</p>
            <p className={style.ClosetPrice}>백마넌 </p>
          </li>
  
        </ul>
      </div>
    )
}