export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static getAll(succesCallback) {
    fetch(GetSendData.todoApiUrl)
      .then((resp) => resp.json())
      .then((data) => succesCallback(data))
      .catch((err) => console.log(err));
  }
}
