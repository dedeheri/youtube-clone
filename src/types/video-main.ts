export interface IVideoMain {
  id: string;
  videoUrl: string;
  type: string;
  title: string;
  description: string;
  viewCount: number;
  thumbnail: string;
  likeCount: number;
  dislikeCount: number;
  channelId: string;
  commentId: null;
  createdAt: string;
  updateAt: string;
  channel: {
    id: string;
    name: string;
    handleName: string;
    description: string;
    avatar: string;
    banner: string;
    subscriber: number;
    createdAt: string;
    updateAt: string;
  };
}
[];

export interface IVideoDetail {
  videoUrl: string;
  title: string;
  likeCount: number;
  channelAvatar: string;
  channelName: string;
  channelSubscriber: number;
}
