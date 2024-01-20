import styles from "./index.module.scss";
import { useState } from "react";

export default function CopyrightButton({ title, content }) {
  const [informationVisible, setInformationVisible] = useState(false);
  const [informationHidden, setInformationHidden] = useState(true);

  const informationButton = () => {
    setInformationVisible(!informationVisible);
    setInformationHidden(!informationHidden);
  };

  return (
    <div className={styles.Copyright}>
      <div className={styles.Presentation}>
        <h2>{title}</h2>
        <button
          className={`${styles.Button} ${
            informationVisible ? styles.clicked : ""
          }`}
          onClick={informationButton}
        >
          🡳
        </button>{" "}
      </div>
      <div
        className={`${styles.Border} ${
          informationVisible ? styles.clicked : ""
        }`}
      ></div>
      <div
        className={`${styles.Content} ${
          informationHidden ? styles.clicked : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
}
