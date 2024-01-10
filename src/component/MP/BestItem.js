import react from "react";
import style from "../../styles/Mp/BestItem.module.css"
import ClosetBox from "../ClosetBox";

export default function NewProduct(){

    return(
        <div className={style.NewProduct}>
          <h2 className={style.MCTitle}>Best</h2>
          <ClosetBox></ClosetBox>
        </div>
    )
}