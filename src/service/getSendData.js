export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static async getAll(succesCallback) {
    // promise way
    // fetch(GetSendData.todoApiUrl)
    //   .then((resp) => resp.json())
    //   .then((data) => succesCallback(data))
    //   .catch((err) => console.log(err));

    // asyc await way

    try {
      const resp = await fetch(GetSendData.todoApiUrl);
      const data = await resp.json();
      succesCallback(data);
    } catch (err) {
      console.error('getAll errror', err);
    }
  }

  static async createTodo(title, successCallback) {
    const newTodo = {
      title: title,
    };
    // fetch(GetSendData.todoApiUrl + '/new', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newTodo),
    // })
    //   .then((resp) => resp.json())
    //   .then((ats) => {
    //     successCallback(ats);
    //   })
    //   .catch((err) => console.log(err));

    const resp = await fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const ats = await resp.json();
    successCallback(ats);
  }

  static async deleteTodo(idToDelete, successCallback) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${idToDelete}`, {
      method: 'DELETE',
    });
    const ats = await resp.json();
    successCallback(ats);
  }
}
