# ToDO List

### Requirements
- List items from the ToDo list (you can use a public REST API available here: https://gorest.co.in/
We suppose we have a logged in user and we want to display all his toDo's https://gorest.co.in/public/v2/users/2856/todos)
- You should be able to add new items through an input and a button (POST https://gorest.co.in/public/v2/users/{user_id}/todos
You can use Authorization Bearer Token: 84cf866d766dbd622631acb6e32e0bfe6f823cd2a72b386b2d7b5ee4df26d0a7)
- Items can be marked as completed from the current list and moved to a list of completed items
- To be possible to edit an item
- To be able to uncheck from the Completed list, and the item to be returned to the current list (pending)
- Display the Completed list below the ToDos list
- Delete items from list (DELETE https://gorest.co.in/public/v2/todos/{item_id})
- Validation on input (validation rules: required, capitalised first letter, max length 35 chars)

### Interest points
- Clean separation of concerns into layers
- Caching (in memory/local storage)
- Clean code and easy to test
- Loading state, in case of slow connection

### Extra (optional)
- Search
- Pagination

You can use: https://gorest.co.in/rest-console for testing the endpoints.
