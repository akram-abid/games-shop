import styles from "./styles/MainBackground.module.css";

export default function MainBackground({url}){
   return(
    <video className={styles.videoBg} autoPlay loop muted>
     <source src={url} type="video/mp4" />
   </video>
   );
}
