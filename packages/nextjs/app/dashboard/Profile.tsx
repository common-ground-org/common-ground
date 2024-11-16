"use client";

import Image from "next/image";
import { Button } from "~~/components/ui/button";
import { UserSchema } from "~~/types/schemas/user";

function getSocialDisplay(social: UserSchema["social"]) {
  const socialDisplay = [];
  if (social.twitter) socialDisplay.push(`X: @${social.twitter.split("/").pop()}`);
  if (social.telegram) socialDisplay.push(`TG: @${social.telegram.split("/").pop()}`);
  if (social.email) socialDisplay.push(`Email: ${social.email}`);
  return socialDisplay.join(" | ");
}

function Profile({ user }: { user: UserSchema }) {
  return (
    <>
      <WebProfile user={user} />
      <MobileProfile />
    </>
  );
}

function WebProfile({ user }: { user: UserSchema }) {
  return (
    <div className="hidden sm:flex flex-row px-10 items-center">
      {/* Avatar */}
      <div className="flex flex-col mr-4">
        <Image src={user.avatar} alt="avatar" width={120} height={120} className="rounded-full" />
        <Button variant="default" className="mt-2">
          Edit
        </Button>
      </div>
      {/* Info */}
      <div className="flex flex-col grow px-4">
        <div className="flex flex-row items-center  mb-4">
          <p className="text-3xl font-bold">{user.name}</p>
          <Button variant="default" className="ml-auto">
            ⚙
          </Button>
        </div>
        <p className="text-sm text-gray-500 mb-2">{user.intro}</p>
        <p className="text-sm text-gray-500">{getSocialDisplay(user.social)}</p>
      </div>
      {/* Cards */}
    </div>
  );
}

function MobileProfile() {
  return <div className="block sm:hidden">Mobile Profile</div>;
}

export default Profile;
