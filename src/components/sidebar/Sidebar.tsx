import { useFetch } from "@/hooks/useFetch";
import { SidebarNavList } from "./sidebarNav/SidebarNavList";
import { MailsObject } from "@/types/mailTypes";

import styles from "./sidebar.module.css";

export const Sidebar: React.FC = () => {
  const { data, error } = useFetch<MailsObject>(`http://localhost:3000/mails`);

  return (
    <aside className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebar_header}>Uyama</h1>
      </div>
      <SidebarNavList mails={data} />
    </aside>
  );
};
