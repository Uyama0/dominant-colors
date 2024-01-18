import { Inbox } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button";

interface MailItemProps {
  label: string;
  messageNumber: number;
}

export const SidebarNavItem: React.FC<MailItemProps> = ({
  messageNumber,
  label,
}) => {
  const navigate = useNavigate();
  return (
    <li>
      <Button
        className="w-full justify-start"
        variant="ghost"
        onClick={() => navigate(`/${label}`)}
      >
        <Inbox size={16} className="mr-1" />
        {label}
        <span className="ml-auto">{messageNumber}</span>
      </Button>
    </li>
  );
};
