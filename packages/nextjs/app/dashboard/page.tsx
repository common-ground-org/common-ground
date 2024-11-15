"use client";

import Profile from "./Profile";
import { UserSchema } from "~~/types/schemas/user";
import ProfileCards from "./ProfileCards";

const mockUser: UserSchema = {
  id: `0x0000000000000000000000000000000000000000`,
  name: "FrozenArcher",
  intro: "I am a web3 developer",
  avatar: "/avatar.png",
  social: {
    twitter: "https://x.com/fracher21",
    telegram: "https://t.me/FrozenArcher21",
    email: "fracher21@gmail.com",
  },
  communities: [
    {
      id: "1",
      name: "Punky Labs",
      avatar: "/avatar.png",
    },
    {
      id: "2",
      name: "Linux Foundation",
      avatar: "/avatar.png",
    },
  ],
  projectsCreated: [
    {
      id: "1",
      name: "Redpill",
      status: "launching",
    },
    {
      id: "2",
      name: "Redpill",
      status: "ended",
    },
  ],
  projectsSupported: [
    {
      id: "1",
      name: "Redpill",
      status: "launching",
    },
    {
      id: "2",
      name: "Redpill",
      status: "ended",
    },
  ],
  tokens: [
    {
      icon: "/avatar.png",
      symbol: "ETH",
      balance: 1000,
    },
    {
      icon: "/avatar.png",
      symbol: "USDC",
      balance: 1000,
    },
    {
      icon: "/avatar.png",
      symbol: "SOL",
      balance: 1000,
    },
  ],
  nfts: [
    {
      image: "/avatar.png",
      name: "Punky",
    },
    {
      image: "/avatar.png",
      name: "Bored Ape",
    },
    {
      image: "/avatar.png",
      name: "CryptoPunk",
    },
  ],
};

function WebMe() {
  return (
    <div className="hidden sm:flex grow flex-col">
      <Profile user={mockUser} />
      <div className="h-4"></div>
      <ProfileCards />
    </div>
  );
}

function MobileMe() {
  return <div className="block sm:hidden">MobileMe</div>;
}

export default function Me() {
  return (
    <>
      <WebMe />
      <MobileMe />
    </>
  );
}
