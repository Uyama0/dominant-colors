import { Button } from "@/components/ui/Button";

import styles from "./sidebar.module.css";

import { Inbox } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebar_header}>Uyama</h1>
      </div>
      <nav className={styles.sidebar_navigaton}>
        <ul className={styles.sidebar_navigaton_list}>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              <Inbox size={16} className="mr-1" />
              Box
              <span className="ml-auto">128</span>
            </Button>
          </li>
          <li>
            <Button variant="ghost">Sent</Button>
          </li>
          <li>
            <Button variant="ghost">Trash</Button>
          </li>
          <li>
            <Button variant="ghost">Archive</Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
