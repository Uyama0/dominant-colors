import style from "./mail.module.css";

export const MailMessageItem = () => {
  return (
    <article className={style.mail_message}>
      <header className={style.mail_message_header}>
        <h2>Whilliam Smith</h2>
        <span>3 mounth ago</span>
      </header>
      <h2 className={style.mail_message_header}>Meeting</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nemo,
        porro fuga eos officia explicabo natus, quae provident harum praesentium
        facere, ad officiis odit ipsam? Sit consequuntur blanditiis corrupti
        cumque.
      </p>
    </article>
  );
};
