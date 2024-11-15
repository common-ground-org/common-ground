export type ProjectStatus = "launching" | "ended";

export type ProjectSchema = {
  id: string;
  name: string;
  status: ProjectStatus;
};
