import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 py-4 px-8">
        <GithubBasicInfo />
        <LinkedinBasicInfo />
      </div>
    </main>
  );
}
