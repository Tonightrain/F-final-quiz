export function fetchTrainees() {
    const url = 'http://localhost:8080/trainees';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addTrainee(Trainee) {
    const url = 'http://localhost:8080/trainees';
    return fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json;charset=utf-8'},
        body:Trainee
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