import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1>Uyama</h1>
      <nav>
        <ul>
          <li>Box</li>
          <li>Sent</li>
          <li>Trash</li>
          <li>Archive</li>
        </ul>
      </nav>
    </aside>
  );
};
