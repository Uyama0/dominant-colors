export interface MailItem {
  id: number;
  sender: string;
  subject: string;
  body: string;
  timestamp: string;
  read: boolean;
}

export interface MailsObject {
  [key: string]: MailItem[];
}
