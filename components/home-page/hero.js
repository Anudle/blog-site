import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/anu.jpg"
          alt="an image showing Anu"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>{"Hi, I'm Anu"}</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
