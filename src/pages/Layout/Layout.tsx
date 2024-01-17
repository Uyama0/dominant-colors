import { Panel, PanelGroup } from "react-resizable-panels";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { Routers } from "@/routes/Routers";
import ResizeHandle from "@/components/resizeHandle/ResizeHandle";

export const Layout = () => {
  return (
    <>
      <PanelGroup direction="horizontal" className="dark">
        <>
          <Panel collapsible={true} collapsedSize={3} minSize={10} maxSize={15}>
            <Sidebar />
          </Panel>
          <ResizeHandle />
        </>
        <Panel>
          <Routers />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={40}>...</Panel>
      </PanelGroup>
    </>
  );
};
