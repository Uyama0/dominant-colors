import { MailItem } from "@/types/dataTypes";

import style from "./mail.module.css";

export const MessageItem: React.FC<MailItem> = (props) => {
  const { sender, subject, body, timestamp, read } = props;

  return (
    <article className={style.message}>
      <header className={style.message_header}>
        <h2>{sender}</h2>
        <span>{timestamp}</span>
      </header>
      <h2 className={style.message_header}>{subject}</h2>
      <p>{body}</p>
    </article>
  );
};
