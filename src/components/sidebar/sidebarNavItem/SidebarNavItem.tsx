import { Inbox } from "lucide-react";

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
      <Button className="w-full justify-start" variant="ghost">
        <Inbox size={16} className="mr-1" />
        {label}
        <span className="ml-auto">{messageNumber}</span>
      </Button>
    </li>
  );
};
