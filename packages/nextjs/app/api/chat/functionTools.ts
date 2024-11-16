import { mockProjects } from "./mockProjects";
import { z } from "zod";

// Enums
export enum SearchType {
  Category = "category",
  Skill = "skill",
  Keyword = "keyword",
}

export enum ProjectStatus {
  Active = "active",
  Urgent = "urgent",
  Completed = "completed",
}

export enum SortField {
  Trending = "trending",
  Newest = "newest",
  ClosingSoon = "closing_soon",
  MostFunded = "most_funded",
}

export enum SortDirection {
  Asc = "asc",
  Desc = "desc",
}

// Interfaces
export interface ProjectLocation {
  country?: string;
  region?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface TeamMember {
  name: string;
  role?: string;
  experience?: string;
}

export interface ProjectTeam {
  project_lead?: TeamMember;
  members?: TeamMember[];
  partners?: string[];
}

export interface ProjectMilestone {
  phase: number;
  title: string;
  status?: "Completed" | "In Progress" | "Pending";
  completion_date?: string;
}

export interface Risk {
  type?: string;
  description: string;
  mitigation?: string;
}

export interface RiskAssessment {
  risk_level?: "Low" | "Medium" | "High";
  key_risks?: Risk[];
}

export interface EnvironmentalImpact {
  water_saved?: string;
  carbon_reduction?: string;
  renewable_energy_used?: boolean;
  renewable_energy_generated?: string;
  trees_preserved?: number;
  land_optimization?: string;
}

// Keep the base impact metrics that were required in the original
export interface ProjectImpactMetrics {
  beneficiaries: number;
  timeframe: string;
  outcomes: string[];
  direct_beneficiaries?: number;
  indirect_beneficiaries?: number;
  sustainability_period?: string;
  sdg_alignment?: string[];
  environmental_impact?: EnvironmentalImpact;
}

// Keep the base project fields that were required in the original
export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  funding_goal: number;
  current_funding: number;
  deadline: string;
  status: ProjectStatus;
  impact_metrics: ProjectImpactMetrics;
  impact_summary: string;
  // Additional optional fields
  subcategory?: string;
  created_at?: string;
  required_skills?: string[];
  location?: ProjectLocation;
  team?: ProjectTeam;
  milestones?: ProjectMilestone[];
  budget_breakdown?: Record<string, number>;
  risk_assessment?: RiskAssessment;
}

export interface ProjectFilters {
  min_funding?: number;
  max_funding?: number;
  status?: ProjectStatus;
  deadline_before?: string;
  deadline_after?: string;
}

export interface SortOptions {
  field: SortField;
  direction: SortDirection;
}

export interface PaginationInfo {
  total_items: number;
  total_pages: number;
  current_page?: number;
  per_page?: number;
}

export interface SearchProjectsParams {
  search_type: SearchType;
  search_value: string;
  filters?: ProjectFilters;
  sort?: SortOptions;
  page?: number;
  per_page?: number;
}

export interface SearchProjectsResponse {
  projects: Project[];
  pagination: PaginationInfo;
}

export interface FindTrendingNeedsParams {
  category: string;
  time_frame: string;
  limit: number;
}
// Updated Zod Schema with optional fields
export const ProjectSchema = z.object({
  // Required fields from original schema
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  funding_goal: z.number(),
  current_funding: z.number(),
  deadline: z.string(),
  status: z.nativeEnum(ProjectStatus),
  impact_metrics: z.object({
    beneficiaries: z.number(),
    timeframe: z.string(),
    outcomes: z.array(z.string()),
    direct_beneficiaries: z.number().optional(),
    indirect_beneficiaries: z.number().optional(),
    sustainability_period: z.string().optional(),
    sdg_alignment: z.array(z.string()).optional(),
    environmental_impact: z
      .object({
        water_saved: z.string().optional(),
        carbon_reduction: z.string().optional(),
        renewable_energy_used: z.boolean().optional(),
        renewable_energy_generated: z.string().optional(),
        trees_preserved: z.number().optional(),
        land_optimization: z.string().optional(),
      })
      .optional(),
  }),
  impact_summary: z.string(),

  // Optional fields
  subcategory: z.string().optional(),
  created_at: z.string().optional(),
  required_skills: z.array(z.string()).optional(),
  location: z
    .object({
      country: z.string().optional(),
      region: z.string().optional(),
      coordinates: z
        .object({
          latitude: z.number(),
          longitude: z.number(),
        })
        .optional(),
    })
    .optional(),
  team: z
    .object({
      project_lead: z
        .object({
          name: z.string(),
          role: z.string().optional(),
          experience: z.string().optional(),
        })
        .optional(),
      members: z
        .array(
          z.object({
            name: z.string(),
            role: z.string().optional(),
            experience: z.string().optional(),
          }),
        )
        .optional(),
      partners: z.array(z.string()).optional(),
    })
    .optional(),
  milestones: z
    .array(
      z.object({
        phase: z.number(),
        title: z.string(),
        status: z.enum(["Completed", "In Progress", "Pending"]).optional(),
        completion_date: z.string().optional(),
      }),
    )
    .optional(),
  budget_breakdown: z.record(z.string(), z.number()).optional(),
  risk_assessment: z
    .object({
      risk_level: z.enum(["Low", "Medium", "High"]).optional(),
      key_risks: z
        .array(
          z.object({
            type: z.string().optional(),
            description: z.string(),
            mitigation: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
});

export const SearchProjectsParamsSchema = z.object({
  search_type: z.nativeEnum(SearchType),
  search_value: z.string().min(1),
  filters: z
    .object({
      min_funding: z.number().optional(),
      max_funding: z.number().optional(),
      status: z.nativeEnum(ProjectStatus).optional(),
      deadline_before: z.string().optional(),
      deadline_after: z.string().optional(),
    })
    .optional(),
  sort: z
    .object({
      field: z.nativeEnum(SortField),
      direction: z.nativeEnum(SortDirection),
    })
    .optional()
    .default({
      field: SortField.Trending,
      direction: SortDirection.Desc,
    }),
  page: z.number().min(1).optional().default(1),
  per_page: z.number().min(1).max(50).optional().default(10),
});

// Tools Implementation
const tools = {
  // Search for projects
  searchProjects: {
    description: "Search for projects based on specified criteria",
    parameters: SearchProjectsParamsSchema,
    execute: async ({ search_type, search_value, filters, sort, page, per_page }: SearchProjectsParams) => {
      console.log("Searching projects with:", {
        search_type,
        search_value,
        filters,
        sort,
        page,
        per_page,
      });

      if (search_type == "category")
        return JSON.stringify({
          projects: mockProjects.filter(
            project =>
              project.category.toLowerCase() === search_value.toLowerCase() ||
              project.subcategory.toLowerCase().includes(search_value.toLowerCase()),
          ),
        });
      else
        return JSON.stringify({
          projects: mockProjects.filter(project => project.name === search_value),
        });
    },
  },

  // Get project details
  getProjectDetail: {
    description: "Get detailed information about a specific project",
    parameters: z.object({
      project_id: z.string(),
    }),
    execute: async ({ project_id }: { project_id: string }) => {
      console.log("Fetching details for project:", project_id);

      return JSON.stringify(mockProjects.find(project => project.id === project_id));
    },
  },

  // Get project details
  donateProject: {
    description: "Get detailed information about a specific project",
    parameters: z.object({
      project_id: z.string(),
    }),
    execute: async ({ project_id }: { project_id: string }) => {
      console.log("Fetching details for project:", project_id);

      return JSON.stringify(mockProjects.find(project => project.id === project_id));
    },
  },

  findTrending: {
    description: "Find currently trending project needs and opportunities",
    parameters: z.object({
      category: z.string().optional(),
    }),
    execute: async ({ category }: { category?: string }) => {
      if (category) {
        return mockProjects.filter(
          project =>
            project.category.toLowerCase() === category.toLowerCase() ||
            project.subcategory.toLowerCase().includes(category.toLowerCase()),
        );
      }
      return mockProjects;
    },
  },
  showProfile: {
    description: "Show the user their profile. Always ask for confirmation before using this tool.",
    parameters: z.object({}),
  },
};

// Helper function to format project links
export const formatProjectLink = (project: Project): string => {
  return `[${project.name}](/project/${project.id})`;
};

// // Example usage
// export const searchAndFormatProjects = async (params: SearchProjectsParams): Promise<string> => {
//   const result = await tools.searchProjects.execute(params);

//   return `Found ${result.pagination.total_items} projects:

// ${result.projects.map(project =>
//   `${formatProjectLink(project)}
//    - ${project.description}
//    - Funding: $${project.current_funding.toLocaleString()}/$${project.funding_goal.toLocaleString()}
//    - Status: ${project.status}
//    - ${project.impact_summary}
//   `
// ).join('\n\n')}

// Page ${result.pagination.current_page} of ${result.pagination.total_pages}`;
// };

export type ToolsType = typeof tools;
export default tools;
