import { useFetch } from "@/hooks/useFetch";
import { SidebarNavList } from "./sidebarNavItem/SidebarNavList";

import styles from "./sidebar.module.css";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Sidebar: React.FC = () => {
  const { data, error } = useFetch<Post[]>(`http://localhost:3000/mails`);

  return (
    <aside className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebar_header}>Uyama</h1>
      </div>
      <SidebarNavList mails={data} />
    </aside>
  );
};
