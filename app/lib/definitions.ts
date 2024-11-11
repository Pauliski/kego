export type User = {
  id: string;
  username: string;
  email: string;
  status: "active" | "inactive";
  dateJoined: string;
};
