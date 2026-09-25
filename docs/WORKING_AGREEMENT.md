# Working Agreement

_Draft for Sprint 1 planning. Items marked **(decide)** need a team vote; everything else is a proposal we can change at any retro._

## Rhythm

Sprints run Monday to Sunday. Sprint planning happens at the start of each sprint, and the review and retro happen at the end, lined up with the Tuesday and Thursday class deadlines.

Standup is async in the team channel by 11am each weekday: what you did, what you're doing, and anything blocking you. Three lines is enough. **(decide: async vs. a short call on class days)**

## Communication

Blockers go in the team channel as soon as you hit them, with the Jira key, rather than waiting for standup. **(decide: which channel/app)** Anyone can pick up an unassigned ticket; assign it to yourself in Jira before starting so two people don't build the same thing.

## Pull requests

Keep PRs small, ideally one ticket and under ~400 changed lines, since a small PR gets reviewed the same day and a large one sits.

Reviews happen within 24 hours of the request. If you can't get to one, say so in the PR so someone else takes it. Review the behavior on the preview URL as well as the diff.

The author merges once CI is green and there's an approval. Nobody pushes directly to `main`.

## Scope and quality

When we run short on time, we cut scope before quality (from the charter). The PO decides what gets cut; the Scrum Master raises it as early as the burndown shows it coming.

## Integrity

All code is our own, per the course policy, and every source file carries the header. Anything we adapt from docs or a tutorial gets a comment citing the source.
