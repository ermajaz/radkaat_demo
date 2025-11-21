import StickySidebarLayout from "@/features/support/components/StickySidebarLayout";
import SupportLayout from "@/features/support/components/SupportLayout";
import { supportData } from "@/features/support/utils/support";


export default function HelpPage() {
  return (
    <SupportLayout image="/images/parallex.jpeg">
      <StickySidebarLayout sections={supportData.help} />
    </SupportLayout>
  );
}
