## REVIEW Command - Course Material & Solution Analysis

This command focuses on the `@TODO: "Cursor AI"` block from the root `readme.md`. It checks lesson relevance using up‑to‑date documentation (via MCP `user-context7` / `@context7`) and attaches short results to the course table of contents, while writing detailed reports next to each lesson.

The command is **independent from vanzan01 "cursor-memory-bank"**: it does not require any Memory Bank files to exist and does not create or update them. It works only with lesson folders and the project documentation files described below.

---

## Responsibilities

The `/review` command implements the following high‑level tasks:

1. **Relevance check for a single lesson**
   - Use up‑to‑date documentation and examples (via MCP `user-context7` / `@context7`) to verify that the lesson content is still accurate and complete.
   - Write a detailed report to `ai-relevance.md` in the lesson folder.
   - Add or update a collapsible `details` block in the root `readme.md` under the corresponding lesson entry in the `## Содержание` section.

2. **Bulk relevance check for all lessons**
   - Iterate over all lessons listed in the `## Содержание` section of the root `readme.md`.
   - For each lesson, perform the same workflow as for a single lesson, updating both the per‑lesson `ai-relevance.md` and the relevant `details` block in `readme.md`.

3. **Solution quality analysis**
   - For a given lesson, analyze the user's solution:
     - highlight knowledge gaps;
     - identify weak or non‑idiomatic implementations;
     - recommend concrete improvements and next study steps.
   - Record this analysis in `ai-relevance.md` (in a dedicated section) or in a separate `lesson-review` section, depending on the lesson structure.

4. **Usage guide for Cursor AI**
   - Generate and maintain a concise guide that explains how to use Cursor AI effectively in this repository (including `/van`, `/plan`, `/build`, `/review` and other commands).
   - Store this guide in `cursor-ai-usage.md` at the repository root and reference it from the root `readme.md`.

---

## Subcommands

### `/review lesson <lesson-path>`

**Purpose:** Run a relevance check for a single lesson and update its summary in the root `readme.md`.

- **Input**
  - `lesson-path`: relative path to the lesson directory (for example, `20-ts/40-classes/110-this-and-typed-context`).
- **Expected lesson content (typical)**
  - `readme.md` with theory, tasks or notes **and/or**
  - `src` directory with the lesson source code.
- **Workflow**
  1. **Determine lesson context**
     - Read `readme.md` and/or relevant files under `lesson-path` (especially `src`).
     - Extract key topics and concepts to verify (for example, `Type aliases`, `Generics functions`, `this` typing, etc.).
  2. **Check relevance via MCP `user-context7` / `@context7`**
     - For each key topic, query the external documentation and examples:
       - identify breaking changes, deprecated patterns, or new best practices;
       - detect missing but important subtopics.
  3. **Write or update `lesson-path/ai-relevance.md`**
     - Create the file if it does not exist.
     - At minimum, include:
       - date of the check;
       - overall status;
       - detailed per‑topic notes;
       - recommended extra topics to learn if content is incomplete or outdated.
  4. **Update the corresponding entry in the root `readme.md`**
     - Locate the lesson item in the `## Содержание` section:
       - find the numbered list entry describing the lesson;
       - use the immediately following bullet with a link (for example, `* [src](20-ts/40-classes/110-this-and-typed-context)`) to match `lesson-path`.
     - Under this entry, ensure there is exactly one collapsible block:
       ```markdown
       <details>
           <summary>ai-relevance</summary>

           [ai-relevance.md](<lesson-path>/ai-relevance.md)
           ```text
           Дата проверки: <YYYY-MM-DD>
           Статус: <Актуально | Частично устарело | Устарело>
           ```
         </details>
       ```
     - If the block does not exist, create it in this exact format, preserving the surrounding indentation style.
     - If the block already exists, only update:
       - the link to `ai-relevance.md` (if the path has changed);
       - the `Дата проверки` line;
       - the `Статус` line.

### `/review all`

**Purpose:** Perform relevance checks for all lessons listed in the `## Содержание` section.

- **Workflow**
  1. Read the root `readme.md`.
  2. Parse the `## Содержание` section and collect all lesson entries that:
     - have a numbered item with a lesson title;
     - are immediately followed by a bullet item containing a link either to `src` or to `readme.md` in a lesson directory (for example, `* [src](20-ts/40-classes/110-this-and-typed-context)`).
  3. For each collected lesson:
     - determine `lesson-path` from the link target;
     - run the same workflow as `/review lesson <lesson-path>`:
       - compute relevance using up‑to‑date docs;
       - write/update `ai-relevance.md`;
       - add/update the corresponding `<details>` block under that lesson entry in `readme.md`.
  4. Optionally, implementations may support skipping recently checked lessons (for example, based on `Дата проверки` within a certain threshold), but this is an optimization, not a requirement of the command contract.

### `/review analyze <lesson-path>`

**Purpose:** Analyze the quality of the user's solution for a specific lesson and point out knowledge gaps and weak parts of the implementation.

- **Input**
  - `lesson-path`: relative path to the lesson directory where the user's work resides.
- **Workflow**
  1. Read the solution code and any solution‑specific `readme.md` under `lesson-path`.
  2. Using MCP `user-context7` / `@context7` and, where available, the official or reference solutions:
     - compare interfaces, types, patterns and architecture;
     - identify:
       - missing required features for this lesson;
       - non‑idiomatic or unsafe TypeScript or React usage;
       - unnecessary complexity or code smells.
  3. Write analysis into `lesson-path/ai-relevance.md`:
     - add a dedicated section, for example:
       ```markdown
       ## Анализ вашего решения

       ### Пробелы в знаниях

       - ...

       ### Замечания к реализации

       - ...

       ### Рекомендованные шаги

       - ...
       ```
     - Preserve any existing relevance sections, only appending or updating this analysis section.
  4. Keep the short `<details>` block in `readme.md` focused on the overall status and date; deep analysis remains only in `ai-relevance.md`.

### `/review cource-plan`

**Purpose:** Refresh the AI-facing course plan used by `/review` based on the current source URL.

- **Workflow**
  1. Read `cource-plan-for-ai.md` at the repository root.
  2. Extract the URL of the actual course plan from the header section (the line starting with `Актуальный план по адресу`).
  3. Fetch the content from this URL and derive a **hierarchical, nested outline** of the course, preserving the same section/lesson nesting as on the course page.
  4. Regenerate the `## План курса` section in `cource-plan-for-ai.md`:
     - replace everything under `## План курса` with a **hierarchical markdown bullet list** that mirrors the developer’s plan (sections, subsections, lessons with their links);
     - keep the introductory part of the file (description, rules) intact.
  5. The regenerated plan must preserve lesson order so that `/review lesson` and `/review analyze` can:
     - know which lessons come before and after the current one;
     - avoid marking topics as "not covered" in `ai-relevance.md` if those topics belong to lessons that come **after** the current lesson in the plan.

### `/review guide`

**Purpose:** Create or update a short guide on how to use Cursor AI and the project‑specific commands effectively.

- **Workflow**
  1. Create or update `cursor-ai-usage.md` at the repository root.
  2. Include at least:
     - how to call `/van`, `/plan`, `/build`, `/review`;
     - how the Memory Bank system is used conceptually (without making `/review` depend on it);
     - how relevance checks and solution analysis work at a high level;
     - tips on requesting concise answers and avoiding unnecessary context to reduce token usage.
  3. Ensure that the root `readme.md` references `cursor-ai-usage.md` from the `### Помощник AI` section or another clearly visible place.

---

## Status Values

The `Статус` line in the `ai-relevance` block and in `ai-relevance.md` should use one of the following values:

- `Актуально`
- `Частично устарело`
- `Устарело`

Implementations may also provide additional explanation or sub‑status inside `ai-relevance.md`, but these three values form the stable external contract exposed in the root `readme.md`.

---

## Usage

- `/review lesson 20-ts/40-classes/110-this-and-typed-context`  
  Check the relevance of the `this и типизация контекста` lesson, write/update `ai-relevance.md` in its folder and attach/refresh the `ai-relevance` details block under this lesson in the `## Содержание` section.

- `/review all`  
  Iterate through all lessons listed in the `## Содержание` section of `readme.md`, perform relevance checks, and update their associated `ai-relevance` blocks.

- `/review analyze 20-ts/30-generics-manipulation/160-practice`  
  Analyze the user's solution for the generics practice lesson and record gaps and issues in `ai-relevance.md`.

- `/review cource-plan`  
  Read `cource-plan-for-ai.md`, fetch the actual course plan from the configured URL, and fully regenerate the `## План курса` section so that subsequent `/review` calls can correctly distinguish between current and future topics.

- `/review guide`  
  Generate or refresh the `cursor-ai-usage.md` guide and ensure it is referenced from the root `readme.md`.

