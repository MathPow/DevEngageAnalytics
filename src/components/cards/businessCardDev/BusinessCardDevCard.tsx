import { GithubUserAllInfo } from "@/lib/types/githubInfo";
import { Header, Bio, Footer, Info } from "../components/businessDevCard/index";

interface BusinessDevCardProps {
  githubData: GithubUserAllInfo;
}

export default function BusinessCardDevCard({ githubData }: BusinessDevCardProps) {
  return (
    <section className="flex gap-x-8 text-white">
      <div
        className={`h-[257px] w-[450px] rounded-xl drop-shadow-lg ${githubData ? "bg-gradient-to-b from-gray-300 to-neutral-200 to-15% dark:from-slate-600 dark:to-gray-800" : "bg-black"}`}
      >
        {githubData && (
          <div className="relative mt-[42px] h-[215px] rounded-xl bg-slate-50 dark:bg-_darkSlateBg">
            <Header avatarUrl={githubData.basicInfo.avatar_url} className="px-6" />
            <Info
              location={githubData.basicInfo.location}
              company={githubData.basicInfo.company}
              html_url={githubData.basicInfo.html_url}
              email={githubData.basicInfo.email}
              blog={githubData.basicInfo.blog}
              twitter_username={githubData.basicInfo.twitter_username}
              created_at={githubData.basicInfo.created_at}
              socials={githubData.socialsInfo}
              className="mr-6 mt-3"
            />
            <Bio
              name={githubData.basicInfo.name}
              alias={githubData.basicInfo.login}
              bio={githubData.basicInfo.bio}
              className="px-6 pt-11"
            />
            <Footer
              className="absolute bottom-2 w-full px-6"
              followers={githubData.basicInfo.followers}
              starsEarned={githubData.totalStarsEarned}
              commits={githubData.contributionsInfo.commits}
              pullRequests={githubData.contributionsInfo.pullRequests}
              issues={githubData.contributionsInfo.issues}
            />
          </div>
        )}
      </div>
    </section>
  );
}

//bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] drop-shadow-xl

//bg-gradient-to-b from-gray-300 to-neutral-200 to-15% dark:from-slate-600 dark:to-gray-800

//bg-blurry-gradient-bg bg-cover bg-center bg-no-repeat
