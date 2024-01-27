import { Button } from "../ui/Button";

import styles from "./message.module.css";

export const MessageDetails = () => {
  return (
    <div className={styles.message_datailed}>
      <header className={styles.mail_header}>
        <h1>Something</h1>
      </header>
      <div className={styles.message_datailed_header}>
        <h1>William Smith</h1>
        <h2>Meeting today</h2>
        <h2>Reply to: william@example.com</h2>
      </div>
      <article className={styles.message_datailed_main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia
        autem similique dolor sapiente molestiae, quam temporibus debitis
        cumque? Accusamus iusto eligendi saepe fuga explicabo consectetur.
        Cupiditate, laboriosam delectus? Unde!
      </article>
      <form className={styles.message_datailed_form}>
        <textarea
          className={styles.message_datailed_form_textarea}
          name="text"
          placeholder="Type your message..."
        ></textarea>
        <Button className="w-20 self-end">Send</Button>
      </form>
    </div>
  );
};
