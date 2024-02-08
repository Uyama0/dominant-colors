import { useSelector } from "react-redux";

import { MessageList } from "@/components/messageList/MessageList";
import { RootState } from "@/types/mailTypes";

import styles from "../mail.module.css";

export const Drafts = () => {
  const messageData = useSelector(
    (state: RootState) => state.mails.data.Drafts || []
  );

  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Drafts</h1>
      </header>
      <MessageList messageData={messageData} />
    </section>
  );
};
