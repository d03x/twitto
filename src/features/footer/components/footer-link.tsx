import Link from "next/link"
interface IFooterLink{
    title : string,
    link : string,
}
import styles from "./styles/link.module.scss"
export const FooterLink = (props:IFooterLink)=>{
    return <Link href={props.link} rel="noopener noreferrer nofollow" className={styles.container}>
        {props.title}
    </Link>
}