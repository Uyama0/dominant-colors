import { MailMessageItem } from "./mailMessageItem";

import style from "./mail.module.css";

export const MailList = () => {
  return (
    <section className={style.mail_list}>
      <MailMessageItem />
    </section>
  );
};
