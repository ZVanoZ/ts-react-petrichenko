(() => {
    //console.log('-- demo-fetch');
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then((res) => {
            console.log('demo-fetch/then-res', res);
            /*
then-res { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
            */
        })
        .catch((reason) => {
            console.log('demo-fetch/catch', reason);
        })
})();

(() => {
    //console.log('-- demo-ITodoItem');
    interface ITodoItem {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
        someNewField: string;
    }

    fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then(res => res.json())
        .then((todoItem: ITodoItem) => {
            console.log('demo-ITodoItem/then-res', todoItem);
            /* someNewField отсутствует. todoItem не соответствует интерфейсу ITodoItem
demo-ITodoItem/then-res {
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false
}
            */
            // if (! (todoItem instanceof ITodoItem)){
            //     throw new Error('There is no item');
            // }
        })
        .catch((reason) => {
            console.log('demo-ITodoItem/catch', reason);
        })
})();


(() => {
    //console.log('-- demo-ITodoItem2/promise-and-fetch');
    interface ITodoItem {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
        someNewField: string;
    }

    return new Promise<ITodoItem>(
        (resolve, reject) => {
            fetch("https://jsonplaceholder.typicode.com/todos/3")
                .then(res => res.json())
                .then((todoItem: ITodoItem) => {
                    console.log('demo-ITodoItem2/then-res', todoItem);
                    /*
demo-ITodoItem2/then-res { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
                    */
                    return resolve(todoItem)
                })
        }
    ).then(
        (res: ITodoItem) => {
            console.log('res.someNewField', res.someNewField); // res.someNewField undefined
        }
    ).catch((reason) => {
        console.log('demo-ITodoItem/catch', reason);
    })

})();