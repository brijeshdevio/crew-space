export interface GroupFeedType {
  _id: string;
  user: {
    _id: string;
    name: string;
    profile: string;
  };
  content: string;
  updatedAt: string;
}
