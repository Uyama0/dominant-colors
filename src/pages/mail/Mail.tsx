import { MailList } from "../../components/mailMessageList/MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import styles from "./mail.module.css";

export const Mail = () => {
  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Mail</h1>
      </header>
      <MailList />
    </section>
  );
};
