// 'use client'

import { auth, clerkClient } from "@clerk/nextjs/server";
import { UserDetails } from "../components/user-details";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { CodeSwitcher } from "../components/code-switcher";
import { LearnMore } from "../components/learn-more";
import { Footer } from "../components/footer";

import { DASHBOARD_CARDS } from "../consts/cards";

export default async function DashboardPage() {
  const { userId } = auth().protect({
      unauthenticatedUrl:"/sign-in"
  });
  
  const user = await clerkClient.users.getUser(userId);

  if (!user) return auth().redirectToSignIn();

  return (
    <>
      <main className="max-w-[75rem] w-full mx-auto">
        <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
          <div>
            <header  className="flex gap-4 h-16 justify-between items-center w-full">
              <div className="flex gap-4">
                <a href="/" target="_blank">
                  WeLove
                </a>
              </div>
              <div className="flex items-center gap-2">
                {/* <OrganizationSwitcher
                  appearance={{
                    elements: {
                      organizationPreviewAvatarBox: "size-6",
                    },
                  }}
                /> */}
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-6",
                    },
                  }}
                />
              </div>
            </header>
            <UserDetails />
          </div>
          <div className="pt-[3.5rem]">
            <CodeSwitcher />
          </div>
        </div>
      </main>
      <LearnMore cards={DASHBOARD_CARDS} />
      <Footer />
    </>
  );
}
