import { Route, Routes } from "react-router-dom";

import { Mail } from "@/pages/Mail";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Mail />} />
    </Routes>
  );
};
