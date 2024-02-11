import Link from "next/link";
import "react-calendar/dist/Calendar.css";
import styles from "./index.module.scss";

export default function Homepage() {
  return (
    <div className={styles.Homepage}>
      HAI FATTO IL COMPLEANNO?
      <Link href="/auguri" className={styles.Link}>
        clicca qui
      </Link>
    </div>
  );
}
