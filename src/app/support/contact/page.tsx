import SupportLayout from "@/components/support/SupportLayout";
import StickySidebarLayout from "@/components/support/StickySidebarLayout";
import { supportData } from "@/utils/support";

export default function ContactPage() {
  return (
    <SupportLayout image="/images/parallex.jpeg">
      <StickySidebarLayout sections={supportData.contact} />
    </SupportLayout>
  );
}
