# Optimizing MCP Context for Claude Code

This tutorial demonstrates how to minimize context token consumption in Claude Code by using project-specific MCP configurations instead of loading all available MCP servers.

## The Problem

When using a general [.mcp.json](https://docs.claude.com/en/docs/claude-code/mcp) file with multiple MCP servers, Claude Code loads all server tools and their descriptions into the context window. This consumes significant tokens even when you only need a fraction of the available functionality.

## The Solution

Use the `--mcp-config` flag to load minimal, project-specific MCP configurations tailored to your current task.

## Tutorial Steps

### Step 1: [The Verbose MCP Server](https://github.com/emarco177/claude-code-crash-course/commit/edef7ffdcaeeeca4d109048053e7444e47cf4a78)

First, we created an intentionally verbose MCP server with excessive tool descriptions to demonstrate token waste:

- Created [verbose_mcp_server.py](verbose_mcp_server.py) with overly detailed documentation
- Each tool has hundreds of tokens of unnecessary description
- Demonstrates how verbose tools consume context unnecessarily

### Step 2: [Loading All MCP Servers](https://github.com/emarco177/claude-code-crash-course/commit/d6e830a881d448aa75502edf05c5b5b8be23fa1d)

Added a general [.mcp.json](.mcp.json) configuration loading multiple MCP servers:
- verbose-server (local)
- context7
- tavily
- playwright

**Result**: Running Claude Code with `/context` reveals thousands of tokens consumed by unused tool descriptions.

### Step 3: [Minimal MCP Configuration](https://github.com/emarco177/claude-code-crash-course/commit/c0b0538570b431a24166e5f33ffab901284097c5)

Created [.mcp.json.tavily](.mcp.json.tavily) with only the Tavily MCP server for research tasks.

**Usage**:
```bash
claude --mcp-config .mcp.json.tavily
```

**Result**: Significantly reduced context consumption while maintaining necessary functionality.

## Commit Reference

| Step | Commit | Files Changed |
|------|--------|---------------|
| 1. Verbose MCP Server | [edef7ff](https://github.com/emarco177/claude-code-crash-course/commit/edef7ffdcaeeeca4d109048053e7444e47cf4a78) | `verbose_mcp_server.py`, `main.py`, `pyproject.toml` |
| 2. General MCP Config | [d6e830a](https://github.com/emarco177/claude-code-crash-course/commit/d6e830a881d448aa75502edf05c5b5b8be23fa1d) | `.mcp.json` |
| 3. Minimal MCP Config | [c0b0538](https://github.com/emarco177/claude-code-crash-course/commit/c0b0538570b431a24166e5f33ffab901284097c5) | `.mcp.json.tavily` |

## Key Takeaways

1. **Default behavior is wasteful**: Loading all MCP servers consumes tokens for tools you won't use
2. **Project-specific configs**: Create minimal `.mcp.json.*` files for different workflows
3. **Use `--mcp-config` flag**: Bootstrap Claude Code with only the servers you need
4. **Monitor with `/context`**: Check token usage to optimize your configuration

## Best Practices

- Create task-specific MCP configurations (e.g., `.mcp.json.research`, `.mcp.json.testing`)
- Keep tool descriptions concise when building MCP servers
- Use `--mcp-config` to select the minimal set of servers for each session
- Regularly audit your MCP configurations for unnecessary tools
