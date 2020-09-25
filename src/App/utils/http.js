export function fetchTrainees() {
    // TODO Feedback: 应该是未分组的学员
    const url = 'http://localhost:8080/trainees';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addTrainee(trainee) {
    const url = 'http://localhost:8080/trainees';
    return fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json;charset=utf-8'},
        body:JSON.stringify(trainee),
    })
        .then((response) => response.json())
        .catch((error) => error)
}

export function fetchTrainers() {
    const url = 'http://localhost:8080/trainers';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addTrainer(name) {
    const url = 'http://localhost:8080/trainers';
    return fetch(url,{
        method:'POST',
        body:name
    })
        .then((response) => response.json())
        .catch((error) => error)
}

export function autoGroup() {
    const url = 'http://localhost:8080/groups/auto-grouping';
    return fetch(url,{
        method:'POST',
    })
        .then((res) => res.json() )
        .catch((err) => err )
}

export function getGroup() {
    const url = 'http://localhost:8080/groups';
    return fetch(url)
        .then((res) => res.json() )
        .catch((err) => err )
}

export function changeGroupName(oldName,newName) {
    const url = 'http://localhost:8080/groups/{id}';
    const request = {
        oldName:oldName,
        newName:newName
    }
    // TODO Feedback: 为什么要patch oldName呢？
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(request),
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
        .then((res) => res.json())
        .catch((err) => err);
}
