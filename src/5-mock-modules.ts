import axios from 'axios';

export class Users {

  static async all() {
    const url = 'https://api.npoint.io/86690d80ff3d455133f0';
    const {data} = await axios.get(url);
    return data;
  }
  
  static async findOneByEmail(email:string) {
    const url = `/users?email=${email}`;
    const {data} = await axios.get(url);
    return data;
  }
}
