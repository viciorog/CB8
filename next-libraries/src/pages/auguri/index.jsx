import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import styles from "./index.module.scss";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("white");
  const [pieces, setPieces] = useState(10);
  const [isPlayer, setIsPlayer] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    setIsPlayer(true);
  }, []);

  const onHandleColorChange = (e) => setColor(e.target.value);

  const onHandlePiecesChange = (e) => setPieces(e.target.value);

  return (
    <div className={styles.Container}>
      <Confetti
        width={width}
        height={height}
        colors={[color]}
        numberOfPieces={pieces}
      />
      <input type="text" value={color} onChange={onHandleColorChange} />
      <input
        type="range"
        value={pieces}
        onChange={onHandlePiecesChange}
        max={500}
      />
      <h1 className={styles.auguri}>AUGURI!</h1>
      {isPlayer && (
        <DynamicReactPlayer
          url="https://youtu.be/goTXPdm_rH8?si=FfLZC2WrVDjs2BF-"
          playing={true}
          width="300px"
          height="100px"
        />
      )}

      <Link href="/">HOMEPAGE</Link>
    </div>
  );
}
