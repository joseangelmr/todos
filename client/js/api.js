import got from 'got';

export function get_todos() {
    return new Promise(
        function (resolve, reject) {
            got.get('/todos', {})
                .then(response => {
                    return resolve(JSON.parse(response.body));
                })
                .catch(error => {
                    return reject(error);
                });
        })
}

export function add_todo(title) {
    return new Promise(
        function (resolve, reject) {
            got.post('/todos', {
                body: {
                    title: title,
                }
            })
                .then(response => {
                    return resolve(JSON.parse(response.body));
                })
                .catch(error => {
                    return reject(error);
                });
        })
}

export function change_todo(todo_id, done) {
    console.log('A EDITAR', todo_id, done)
    return new Promise(
        function (resolve, reject) {
            got.put('/todos/' + todo_id, {
                body: {
                    done,
                }
            })
                .then(response => {
                    return resolve(JSON.parse(response.body));
                })
                .catch(error => {
                    return reject(error);
                });
        })
}


export function remove_todo(todo_id) {
    return new Promise(
        function (resolve, reject) {
            got.delete('/todos/' + todo_id, {
                params: {
                    todo_id,
                }
            })
                .then(response => {
                    return resolve(JSON.parse(response.body));
                })
                .catch(error => {
                    return reject(error);
                });
        })
}
