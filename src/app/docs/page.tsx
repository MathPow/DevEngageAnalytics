"use client";

import BackgroundGradient from "@/components/deco/BackgroundGradient";
import DocNav from "@/components/navigation/DocNav";
import LinkList from "@/components/navigation/LinkList";

export default function Home() {
  return (
    <main>
      <BackgroundGradient text="docs" />
      <div className="flex flex-row mx-[12vw] 2xl:mx-auto max-w-[1300px] mt-28">
        <div className="w-56">
          <DocNav />
        </div>
        <div>
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
          Source.
        </div>
        <div className="w-56 ml-10 hidden lg:block">
          <p className="font-bold mb-3">On This Page</p>
          <span className="text-sm flex flex-col gap-y-2">
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </span>
        </div>
      </div>
    </main>
  );
}
