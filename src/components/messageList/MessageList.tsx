import { useDispatch } from "react-redux";
import { useState } from "react";

import { MessageItem } from "./MessageItem";
import { MailsObject } from "@/types/mailTypes";

import style from "./mail.module.css";

export const MessageList: React.FC<MailsObject> = ({ messageData }) => {
  const [message, setMessage] = useState(messageData[0] || undefined);

  // useDispatch(message);

  return (
    <section className={style.message_list}>
      <ul>
        {messageData.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
      </ul>
    </section>
  );
};
