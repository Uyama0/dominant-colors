import { Sidebar } from "@/components/Sidebar";
import { Routers } from "@/routes/Routers";

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Routers />
      </div>
    </>
  );
};
