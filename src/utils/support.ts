import { ReactNode } from "react";
import { privacyData } from "./privacyData";
import { helpData } from "./helpData";
import { supportCenterData } from "./supportCenterData";
import { termsData } from "./termsData";
import { contactData } from "./contactData";
import { brandData } from "./aboutData";

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

export const supportData: {
  contact: Section[];
  about: Section[];
  terms: Section[];
  privacy: Section[];
  help: Section[];
  supportcenter: Section[];
} = {
  contact: contactData,
  about: brandData,
  terms: termsData,
  privacy: privacyData,
  help: helpData,
  supportcenter: supportCenterData,
};
