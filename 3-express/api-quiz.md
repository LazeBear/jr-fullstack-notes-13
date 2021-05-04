# practice CRUD

The server provides the following API

## Data structure

### User

`{"username":string}`

### Task

```
{
	"id": number,
	"description":string,
	"done":boolean,
	"username":string
}
```

## API

| Method | API            | purpose           | body                | query params |
| ------ | -------------- | ----------------- | ------------------- | ------------ |
| POST   | /api/users     | create new user   | "username"          |
| GET    | /api/tasks     | get all tasks     |                     | "username"   |
| GET    | /api/tasks/:id | get task by id    |
| PUT    | /api/tasks/:id | update task by id | field to be updated |
| DELETE | /api/tasks/:id | delete task by id |

## Your tasks

1. Create a user with username
2. find the tasks related to your user account
3. delete one of your tasks
4. update the other one of your tasks to `{"done":true}`
