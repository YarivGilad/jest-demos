/* import axios from 'axios';
import { Users } from './5-mock-modules';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

interface User {
  email: string;
  last_name: string;
  first_name: string;
}

test('get all users - Users.all()', async () => {
  const fakeData: User[] = [
    { email: "rclend24@gmail.com", last_name: "Clendinning", first_name: "Rolland" },
    { email: "dbedson1@weebly.com", last_name: "Bedson", first_name: "Darya" },
    { email: "ebeekman2@hud.gov", last_name: "Beekman", first_name: "Erskine" }
  ];
  const resp = { data: fakeData };
  mockedAxios.get.mockResolvedValue(resp);

  await expect(Users.all()).resolves.toEqual(fakeData);
});

test('get user by email - Users.findOneByEmail(email)', async () => {
  const user: User = { email: "ebeekman2@hud.gov", last_name: "Beekman", first_name: "Erskine" };
  const resp = { data: user };
  mockedAxios.get.mockResolvedValue(resp);

  const res = await Users.findOneByEmail(user.email);
  console.log({ res });
  await expect(Users.findOneByEmail(user.email)).resolves.toEqual(user);
}); */



/**
 * Clear all mocks after each test
 */
import axios from 'axios';
import { Users } from './5-mock-modules';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Reset all mocks after each test
afterEach(() => {
  jest.clearAllMocks(); // Clears all instances and call history
});

test('get all users - Users.all() should call axios.get once', async () => {
  const fakeData = [
    { email: "rclend24@gmail.com", last_name: "Clendinning", first_name: "Rolland" },
  ];
  const resp = { data: fakeData };
  mockedAxios.get.mockResolvedValue(resp);

  await Users.all();
  expect(mockedAxios.get).toHaveBeenCalledTimes(1); // Should be exactly 1
});

test('get user by email - Users.findOneByEmail(email) should call axios.get once', async () => {
  const user = { email: "rclend24@gmail.com", last_name: "Clendinning", first_name: "Rolland" };
  const resp = { data: user };
  mockedAxios.get.mockResolvedValue(resp);

  await Users.findOneByEmail(user.email);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1); // Should be exactly 1, independent of previous tests
});
 