import { Panel, PanelGroup } from "react-resizable-panels";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { Routers } from "@/routes/Routers";
import ResizeHandle from "@/components/resizeHandle/ResizeHandle";

export const Layout = () => {
  return (
    <>
      <PanelGroup direction="horizontal" className="dark">
        <>
          <Panel collapsible={true} collapsedSize={10} minSize={20}>
            <Sidebar />
          </Panel>
          <ResizeHandle />
        </>
        <Panel defaultSize={20} order={2}>
          <Routers />
        </Panel>
      </PanelGroup>
    </>
  );
};
