import react from "react";
import style from "../../styles/Mp/AllProduct.module.css"
import ClosetBox from "../ClosetBox";

export default function NewProduct(){

    return(
        <div className={style.NewProduct}>
          <h2 className={style.MCTitle}>PRODUCT</h2>
          <ClosetBox></ClosetBox>
        </div>
    )
}