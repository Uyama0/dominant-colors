import { Route, Routes } from "react-router-dom";

import { Mail } from "@/pages/mail/Mail";
import { Sent } from "@/pages/sent/Sent";
import { Drafts } from "@/pages/drafts/Drafts";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/Mail" element={<Mail />} />
      <Route path="/Sent" element={<Sent />} />
      <Route path="/Drafts" element={<Drafts />} />
    </Routes>
  );
};
