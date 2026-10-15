import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Harvest Moon, Harvest Moon: Echoes of Teradea, and related names, logos, screenshots, and media belong to Natsume Inc. and their respective owners.</p>
      <p>This is a non-official fan wiki implementation for informational and guide presentation purposes. It is not affiliated with or endorsed by Natsume Inc.</p>
      <p>If you own rights to content displayed here and have a concern, contact {siteConfig.supportEmail} for review.</p>
    </LegalPage>
  );
}
