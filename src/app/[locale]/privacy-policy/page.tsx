import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for Harvest Moon: Echoes of Teradea. We do not request account credentials, platform passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Steam, Nintendo, PlayStation, Xbox, YouTube, Natsume, or community tools. Those services are governed by their own privacy policies.</p>
      <p>For privacy questions or data removal requests, contact {siteConfig.supportEmail}.</p>
    </LegalPage>
  );
}
