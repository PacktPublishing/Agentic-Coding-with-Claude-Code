export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  githubUrl: string;
  author: string;
  stars?: number;
  language: string;
  hookTypes: HookType[];
  lastUpdated?: Date;
  featured?: boolean;
}

export enum HookCategory {
  MONITORING = "Monitoring & Observability",
  SECURITY = "Security & Validation",
  WORKFLOW = "Workflow Automation",
  TESTING = "Testing & Quality",
  INTEGRATION = "External Integration",
  UTILITY = "Utilities & Helpers",
  LEARNING = "Learning & Examples",
  TEAM = "Team Collaboration"
}

export enum HookType {
  PRE_TOOL_USE = "PreToolUse",
  POST_TOOL_USE = "PostToolUse",
  USER_PROMPT_SUBMIT = "UserPromptSubmit",
  NOTIFICATION = "Notification",
  STOP = "Stop",
  SUBAGENT_STOP = "SubagentStop",
  SUBAGENT_START = "SubagentStart",
  SUBAGENT_STREAM = "SubagentStream"
}