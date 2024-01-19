import { MessageList } from "../../components/messageList/MessageList";
import { useSelector } from "react-redux";

import styles from "./mail.module.css";
import { RootState } from "@/types/dataTypes";

export const Mail = () => {
  // rewrite for memo
  // https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization
  const inboxData = useSelector(
    (state: RootState) => state.mails.data.Inbox || []
  );

  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Mail</h1>
      </header>
      <MessageList inboxData={inboxData} />
    </section>
  );
};
