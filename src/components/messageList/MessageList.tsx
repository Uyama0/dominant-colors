import { MessageItem } from "./MessageItem";

import { MailsObject } from "@/types/dataTypes";
import style from "./mail.module.css";

export const MessageList: React.FC<MailsObject> = ({ inboxData }) => {
  return (
    <section className={style.message_list}>
      <ul>
        {inboxData.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
      </ul>
    </section>
  );
};
