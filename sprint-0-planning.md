# Sprint 0 – Planning

## Product Vision
TaskFlow is a lightweight backend service that enables users to create and manage tasks efficiently, while demonstrating Agile delivery and DevOps automation practices.

---

## Product Backlog

| ID  | User Story                                                                 | Priority          | Story Points |
|-----|----------------------------------------------------------------------------|-------------------|--------------|
| US1 | As a user, I want to create a task so I can track my work                  | High              | 3            |
| US2 | As a user, I want to view all tasks so I can see my workload               | High              | 2            |
| US3 | As a user, I want to update a task’s status                                | Medium            | 3            |
| US4 | As a user, I want to delete a task I no longer need                        | Medium            | 2            |
| US5 | As a system, I want a health endpoint to verify availability               | Low               | 1            |
| US6 | As a developer, I want logs for requests and errors                        | Low               | 2            |

---

## Acceptance Criteria

### US1 – Create Task
- POST /tasks
- Accepts title and optional description
- Default status is `todo`
- Returns created task with ID
- HTTP 201 response

### US2 – View Tasks
- GET /tasks
- Returns list of tasks
- HTTP 200 response

### US3 – Update Task Status
- PATCH /tasks/:id
- Accepts valid task status
- Returns updated task

### US4 – Delete Task
- DELETE /tasks/:id
- Removes task
- HTTP 204 or success message

### US5 – Health Check
- GET /health
- Returns `{ status: "ok" }`

### US6 – Logging
- Logs incoming requests
- Logs errors

---

## Definition of Done (DoD)
A backlog item is considered done when:
- Code is implemented and committed
- Tests are written and passing
- CI pipeline passes
- Feature works as expected
- Code follows NestJS conventions

---

## Sprint 1 Plan

### Sprint Goal
Deliver the first working version of TaskFlow and establish CI/CD.

### Selected Stories
- US1: Create Task
- US2: View Tasks
