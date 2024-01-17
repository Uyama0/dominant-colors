import { Inbox } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";

interface MailItemProps {
  label: string;
  messageNumber: number;
}

export const SidebarNavItem: React.FC<MailItemProps> = ({
  messageNumber,
  label,
}) => {
  return (
    <li>
      <Link to={label}>
        <Button className="w-full justify-start" variant="ghost">
          <Inbox size={16} className="mr-1" />
          {label}
          <span className="ml-auto">{messageNumber}</span>
        </Button>
      </Link>
    </li>
  );
};
