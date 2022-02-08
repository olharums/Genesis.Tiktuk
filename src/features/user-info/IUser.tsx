export interface IUser {
  avatar: string;
  name: string;
  following: number;
  fans: number;
  heart: number;
  signature: string;
  bioLink: {
    filled: boolean;
    link: string;
  };
}
