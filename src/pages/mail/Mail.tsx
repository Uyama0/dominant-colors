import { MailList } from "./MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import styles from "./mail.module.css";

export const Mail = () => {
  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Mail</h1>

        {
          // change to self made component
          /* <Tabs defaultValue="account" className="w-[150px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all_mail">All mail</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>
        </Tabs> */
        }
      </header>
      <MailList />
    </section>
  );
};
