import { Button } from "@/components/ui/Button";

import style from "./mail.module.css";

export const MailList = () => {
  return (
    <section className={style.mail_list}>
      <div className={style.mail_message}>
        <div className={style.mail_message_header}>
          <h1>Whilliam Smith</h1>
          <span>3 mounth ago</span>
        </div>
        <h2>theme</h2>
        <p>text here</p>
      </div>
    </section>
  );
};
