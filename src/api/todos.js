const userId = '2856';
const endpointUri = 'https://gorest.co.in/public/v2';
const bearerToken = 'Bearer c7aa9f6c0cfa178e9a11d231f92ca4d031d9185b8ce5c4ac9e4f15ce68b866f4';

export const getTodoList = (callback) => {
    fetch(`${endpointUri}/users/${userId}/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearerToken
        }
    }).then(res => res.json())
        .then((resJson) => {
            callback(undefined, resJson);
        }).catch(callback);
};

export const addTodoItem = (item, callback) => {
    fetch(`${endpointUri}/users/${userId}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearerToken
        },
        body: JSON.stringify(item)
    }).then(res => res.json())
        .then((resJson) => {
            callback(undefined, resJson);
        }).catch(callback);
};

export const deleteTodoItem = (id, callback) => {
    fetch(`${endpointUri}/todos/${id}`, {
        method: "POST",
        headers: {
            "Authorization": bearerToken
        }
    }).then(res => {
        console.log("Response from delete:", res);
        callback(undefined);
    });
};