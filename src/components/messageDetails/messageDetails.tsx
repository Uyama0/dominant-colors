import styles from "./message.module.css";
import { Button } from "../ui/Button";

export const MessageDetails = () => {
  return (
    <div>
      <header className={styles.mail_header}>
        <h1>Something</h1>
      </header>
      <section>
        <h1>William Smith</h1>
        <h2>Meeting today</h2>
        <h2>Reply to: william@example.com</h2>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia
        autem similique dolor sapiente molestiae, quam temporibus debitis
        cumque? Accusamus iusto eligendi saepe fuga explicabo consectetur.
        Cupiditate, laboriosam delectus? Unde!
      </p>
      <section>
        <textarea name="text">ddwqdqwwwwwwwwwwwwwww</textarea>
        <div></div>
        <Button>Send</Button>
      </section>
    </div>
  );
};
