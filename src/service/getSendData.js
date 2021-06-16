export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static async getAll(succesCallback) {
    // promise way
    // fetch(GetSendData.todoApiUrl)
    //   .then((resp) => resp.json())
    //   .then((data) => succesCallback(data))
    //   .catch((err) => console.log(err));

    // asyc await way
    const resp = await fetch(GetSendData.todoApiUrl);
    const data = await resp.json();
    succesCallback(data);
  }

  static createTodo(title, successCallback) {
    const newTodo = {
      title: title,
    };
    fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((ats) => {
        successCallback(ats);
      })
      .catch((err) => console.log(err));
  }
}
