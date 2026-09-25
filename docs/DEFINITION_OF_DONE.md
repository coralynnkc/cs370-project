# Definition of Done

_Proposed in SPRINT_PLAN.md §5; confirm at Sprint 1 planning (Sept 28) and edit here if the team changes it._

A story or task is done when all of the following are true:

1. Its acceptance criteria pass, checked on the Vercel preview URL and not just on localhost.
2. New logic has tests, and CI is green.
3. One teammate other than the author has reviewed and approved the PR.
4. It is merged to `main` and live on the production URL.
5. The README or docs are updated if setup or behavior changed.
6. The Jira ticket is moved to Done with the PR linked.

Every new source file also carries the integrity header, which CI enforces.

"Done" means all six. A ticket that's merged but missing its docs update stays in In Review, since documentation and deployment are each graded separately and are much harder to backfill in December.
