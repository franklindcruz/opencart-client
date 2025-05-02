export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user';
}
