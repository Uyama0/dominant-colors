import { PanelResizeHandle } from "react-resizable-panels";

import styles from "./resizeHandle.module.css";

export default function ResizeHandle({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={[styles.ResizeHandleOuter, className].join(" ")}
      id={id}
    >
      <div className={styles.ResizeHandleInner}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-fold-horizontal"
        >
          <path d="M2 12h6" />
          <path d="M22 12h-6" />
          <path d="M12 2v2" />
          <path d="M12 8v2" />
          <path d="M12 14v2" />
          <path d="M12 20v2" />
          <path d="m19 9-3 3 3 3" />
          <path d="m5 15 3-3-3-3" />
        </svg>
      </div>
    </PanelResizeHandle>
  );
}
