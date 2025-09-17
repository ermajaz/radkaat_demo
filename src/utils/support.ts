import { ReactNode } from "react";
import { privacyData } from "./privacyData";
import { helpData } from "./helpData";
import { supportCenterData } from "./supportCenterData";
import { termsData } from "./termsData";
import { contactData } from "./contactData";

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

export const supportData: {
  contact: Section[];
  terms: Section[];
  privacy: Section[];
  help: Section[];
  supportcenter: Section[];
} = {
  contact: contactData,
  terms: termsData,
  privacy: privacyData,
  help: helpData,
  supportcenter: supportCenterData,
};
