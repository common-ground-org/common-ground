import { UserSchema } from "../../../../types/schemas/user";

export async function GET(request: Request, { params }: { params: { address: string } }) {
  const { address } = params;

  // Mock user data based on schema
  const mockUser: UserSchema = {
    id: address,
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

  return new Response(JSON.stringify(mockUser), {
    headers: { "Content-Type": "application/json" },
  });
}
