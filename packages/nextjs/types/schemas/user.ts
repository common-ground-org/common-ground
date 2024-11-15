import { CommunitySchema } from "./community";
import { ProjectSchema } from "./project";
import { NFTSchema, TokenSchema } from "./token";

export type UserSchema = {
  id: string;
  name: string;
  intro: string;
  avatar: string;
  social: {
    email?: string;
    twitter?: string;
    telegram?: string;
  };
  communities: CommunitySchema[];
  projectsCreated: ProjectSchema[];
  projectsSupported: ProjectSchema[];
  tokens: TokenSchema[];
  nfts: NFTSchema[];
};
