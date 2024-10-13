import TypeIcon from "../../assets/type.svg";
import s from "./introduction-section.module.scss";

export function IntroductionSection() {
  return (
    <div className={s.content}>
      <section className={s.section}>
        <img src={TypeIcon} />
      </section>
      <div className={s.textContent}>
        <h1>Hi, I'm Nati</h1>
        <h2>Full-stack developer and innovation enthusiast</h2>
        <p>
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>
      </div>
    </div>
  );
}
