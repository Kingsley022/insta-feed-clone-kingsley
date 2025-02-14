export interface Post {
    id: number;
    username: string;
    profile_image: string;
    post_image: string;
    caption: string;
    location?: string; // Optional, as not all posts have a location
    likes: number;
    liked_by: LikedUser[];
    comments: number;
    is_liked: boolean;
    comments_list: Comment[];
}
  
interface LikedUser {
username: string;
profile_image: string;
}

interface Comment {
username: string;
profile_image: string;
comment: string;
likes: number;
replies?: Reply[]; // Optional, as not all comments have replies
}

interface Reply {
username: string;
profile_image: string;
comment: string;
}
  