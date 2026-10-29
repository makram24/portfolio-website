export type AgentSkillStatus = "live" | "pending";

export interface AgentSkill {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  status: AgentSkillStatus;
  agensiUrl?: string;
  skillHqUrl: string;
  buySkillsUrl: string;
}

/** Paid agent skills listed on Agensi / SkillHQ / BuySkills (from skills-links.pdf, 2026-10-20). */
export const agentSkills: AgentSkill[] = [
  {
    id: "ci-cd-doctor",
    title: "CI/CD Doctor — Fix or Generate GitHub Actions",
    slug: "ci-cd-doctor",
    price: 29,
    description:
      "Diagnose failing GitHub Actions from logs, or draft a minimal green pipeline — confirm before every workflow write.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/ci-cd-doctor-fix-or-generate-github-actions",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/ci-cd-doctor",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-ci-cd-doctor",
  },
  {
    id: "crm-mcp-builder",
    title: "CRM MCP Builder — Mock-to-Live Agent Bridge",
    slug: "crm-mcp-builder",
    price: 39,
    description:
      "Ship an MCP bridge from your agent to any REST CRM: discovery, tool contracts, mock fixtures, live auth, rate limits, and confirm-before-write.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/crm-mcp-builder-mock-to-live-agent-bridge",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/crm-mcp-builder",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-crm-mcp-builder",
  },
  {
    id: "env-doctor-pro",
    title: "Env Doctor Pro — Why Won’t This Repo Start",
    slug: "env-doctor-pro",
    price: 29,
    description:
      "Diagnose why a project won’t install or boot: toolchain, lockfiles, missing env keys, ports — ranked fix plan with confirm before every write.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/env-doctor-pro-why-won-t-this-repo-start",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/env-doctor-pro",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-env-doctor-pro",
  },
  {
    id: "mcp-operator-generic",
    title: "MCP Operator — Confirm-Before-Write for Any Server",
    slug: "mcp-operator-generic",
    price: 29,
    description:
      "Operate any MCP server like a careful human: classify read vs write, confirm before mutations, resolve ambiguous IDs, plan multi-step tool chains.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/mcp-operator-confirm-before-write-for-any-server",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/mcp-operator-generic",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-mcp-operator-generic",
  },
  {
    id: "minicrm-operator",
    title: "MiniCRM Operator — Safe Agent CRM Workflows",
    slug: "minicrm-operator",
    price: 24,
    description:
      "Run miniCRM from your AI agent with schema-first CategoryIds, confirm-before-write on every mutation, and clear multi-match contact handling.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/minicrm-operator-safe-agent-crm-workflows",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/minicrm-operator",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-minicrm-operator",
  },
  {
    id: "minicrm-operator-hu",
    title: "MiniCRM Operátor — Biztonságos CRM ügynök munkafolyamat",
    slug: "minicrm-operator-hu",
    price: 24,
    description:
      "miniCRM kezelése AI ügynökkel: séma-alapú CategoryId, megerősítés minden írás előtt, több kontakt találat tisztázása.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/minicrm-oper-tor-biztons-gos-crm-gyn-k-munkafolyamat",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/minicrm-operator-hu",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-minicrm-operator-hu",
  },
  {
    id: "paid-code-reviewer",
    title: "Paid Code Reviewer — Severity-Rated Diff & PR Review",
    slug: "paid-code-reviewer",
    price: 24,
    description:
      "Severity-rated code review for diffs and PRs: blockers first, evidence with file paths, concrete fixes — confirm before any edits.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/paid-code-reviewer-severity-rated-diff-pr-review",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/paid-code-reviewer",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-paid-code-reviewer",
  },
  {
    id: "pr-ship-pack",
    title: "PR Ship Pack — Commits, PR Body, Test Plan",
    slug: "pr-ship-pack",
    price: 19,
    description:
      "Ship finished work as conventional commits + PR: title, body, test plan, and changelog notes — confirm before every git write.",
    status: "live",
    agensiUrl:
      "https://www.agensi.io/skills/pr-ship-pack-commits-pr-body-test-plan",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/pr-ship-pack",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-pr-ship-pack",
  },
  {
    id: "agent-handoff-pro",
    title: "Agent Handoff Pro — Clean Context Packs",
    slug: "agent-handoff-pro",
    price: 24,
    description:
      "Package work into a clean handoff brief another agent or human can resume — no silent writes.",
    status: "pending",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/agent-handoff-pro",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-agent-handoff-pro",
  },
  {
    id: "browser-qa-operator",
    title: "Browser QA Operator — Click Paths & Bugs",
    slug: "browser-qa-operator",
    price: 29,
    description:
      "Run structured browser QA: happy path, edge cases, and bug reports — confirm before any production code fixes.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/browser-qa-operator",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-browser-qa-operator",
  },
  {
    id: "contract-review-lite",
    title: "Contract Review Lite — Clause Risk Map",
    slug: "contract-review-lite",
    price: 29,
    description:
      "Map contract clause risks in plain language for negotiation prep — not legal advice; confirm before any file writes.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/contract-review-lite",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-contract-review-lite",
  },
  {
    id: "crm-mcp-builder-hu",
    title: "CRM MCP Builder HU — Mocktól élőig",
    slug: "crm-mcp-builder-hu",
    price: 39,
    description:
      "Magyar útmutató: REST CRM → MCP eszközök, mock, élő auth, megerősítés írás előtt.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/crm-mcp-builder-hu",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-crm-mcp-builder-hu",
  },
  {
    id: "framework-aware-tdd",
    title: "Framework-Aware TDD — Jest, Vitest, Pytest, Go",
    slug: "framework-aware-tdd",
    price: 24,
    description:
      "Framework-depth TDD: red-green-refactor for Jest, Vitest, Pytest, and Go — confirm before production edits.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/framework-aware-tdd",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-framework-aware-tdd",
  },
  {
    id: "kpi-sheet-analyst",
    title: "KPI Sheet Analyst — Metrics Without Fiction",
    slug: "kpi-sheet-analyst",
    price: 24,
    description:
      "Analyze KPI sheets and CSVs into trends, anomalies, and next questions — confirm before overwriting source data.",
    status: "pending",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/kpi-sheet-analyst",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-kpi-sheet-analyst",
  },
  {
    id: "minicrm-daily-standup",
    title: "miniCRM Daily Standup — Tasks to Brief",
    slug: "minicrm-daily-standup",
    price: 19,
    description:
      "Pull miniCRM tasks into a daily standup brief — reads first, confirm before any status writes.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/minicrm-daily-standup",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-minicrm-daily-standup",
  },
  {
    id: "minicrm-invoice-assistant",
    title: "miniCRM Invoice Assistant — Draft & Confirm",
    slug: "minicrm-invoice-assistant",
    price: 19,
    description:
      "Draft and reconcile miniCRM invoices with schema-first CategoryIds — confirm before every write.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/minicrm-invoice-assistant",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-minicrm-invoice-assistant",
  },
  {
    id: "openclaw-operator",
    title: "OpenClaw Operator — Confirm-Before-Write Tools",
    slug: "openclaw-operator",
    price: 29,
    description:
      "Operate OpenClaw / agent tool chains safely: classify read vs write, confirm before mutations.",
    status: "pending",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/openclaw-operator",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-openclaw-operator",
  },
  {
    id: "plan-grill-enterprise",
    title: "Plan Grill Enterprise — Stress-Test the Plan",
    slug: "plan-grill-enterprise",
    price: 29,
    description:
      "Stress-test implementation plans for risk, scope, and missing decisions before coding — confirm before plan file writes.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/plan-grill-enterprise",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-plan-grill-enterprise",
  },
  {
    id: "python-pytest-pro",
    title: "Python Pytest Pro — Fixtures & Parametrize",
    slug: "python-pytest-pro",
    price: 24,
    description:
      "Pytest-depth tests: fixtures, parametrize, monkeypatch — confirm before production edits.",
    status: "pending",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/python-pytest-pro",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-python-pytest-pro",
  },
  {
    id: "reddit-gtm-operator",
    title: "Reddit GTM Operator — Value-First Posts",
    slug: "reddit-gtm-operator",
    price: 24,
    description:
      "Plan Reddit go-to-market: subreddit fit, value-first posts, and reply strategy — confirm before any live post.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/reddit-gtm-operator",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-reddit-gtm-operator",
  },
  {
    id: "rest-api-mcp-scaffold",
    title: "REST API MCP Scaffold — OpenAPI to Mock to Live",
    slug: "rest-api-mcp-scaffold",
    price: 39,
    description:
      "OpenAPI/REST → tool contracts → mock fixtures → live auth — confirm before writes and live flip.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/rest-api-mcp-scaffold",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-rest-api-mcp-scaffold",
  },
  {
    id: "secure-deps-audit",
    title: "Secure Deps Audit — Dependencies, Secrets & Auth",
    slug: "secure-deps-audit",
    price: 29,
    description:
      "Severity-rated audit of dependencies, leaked secrets, and auth misconfig — evidence with paths, confirm before every write.",
    status: "pending",
    skillHqUrl: "https://skillhq.dev/skills/makramalmoghrabi/secure-deps-audit",
    buySkillsUrl: "https://app.buyskills.ai/plugins/makram24-secure-deps-audit",
  },
  {
    id: "seo-content-shipper",
    title: "SEO Content Shipper — Brief to Publish-Ready",
    slug: "seo-content-shipper",
    price: 24,
    description:
      "Turn a keyword/brief into publish-ready SEO copy with title, meta, and outline — confirm before CMS or repo writes.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/seo-content-shipper",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-seo-content-shipper",
  },
  {
    id: "typescript-strict-ship",
    title: "TypeScript Strict Ship — Types Without any",
    slug: "typescript-strict-ship",
    price: 24,
    description:
      "Ship TypeScript under strict settings: kill any, fix tsc errors, confirm before broad refactors.",
    status: "pending",
    skillHqUrl:
      "https://skillhq.dev/skills/makramalmoghrabi/typescript-strict-ship",
    buySkillsUrl:
      "https://app.buyskills.ai/plugins/makram24-typescript-strict-ship",
  },
];

export const agentSkillsStorefront =
  "https://www.agensi.io/creators/makram-al-moghrabi";

export const liveAgentSkills = agentSkills.filter((s) => s.status === "live");
export const pendingAgentSkills = agentSkills.filter(
  (s) => s.status === "pending",
);
