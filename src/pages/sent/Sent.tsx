import { MessageList } from "../../components/messageList/MessageList";
import { useSelector } from "react-redux";

import { RootState } from "@/types/mailTypes";
import styles from "../mail.module.css";

export const Sent = () => {
  const messageData = useSelector(
    (state: RootState) => state.mails.data.Sent || []
  );

  console.log(messageData);

  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Sent</h1>
      </header>
      <MessageList messageData={messageData} />
    </section>
  );
};
