import { SidebarNavItem } from "./SidebarNavItem";
import { MailsObject } from "@/types/dataTypes";

import styles from "../sidebar.module.css";

interface SidebarNavListProps {
  mails?: MailsObject;
}

export const SidebarNavList: React.FC<SidebarNavListProps> = ({ mails }) => {
  return (
    <nav className={styles.sidebar_navigaton}>
      <ul className={styles.sidebar_navigaton_list}>
        {mails &&
          Object.keys(mails).map((messageType) => (
            <SidebarNavItem
              key={messageType}
              messageNumber={mails[messageType].length}
              label={messageType}
            />
          ))}
      </ul>
    </nav>
  );
};
