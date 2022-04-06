import create, { State } from "zustand";
import { Comments } from "../../utils/interface/comments";
import { Posts } from "../../utils/interface/posts";
import PromiseGet from "../../utils/promise/promise";

export interface PostStore extends State {
    post: Posts[];
    postComment: Posts;
    comment: Comments[];
    setPost: () => void;
    setComment: (id:number) => void
}

const usePostStore = create<PostStore>((set) => ({
    post: [],
    comment: [],
    postComment: {} as Posts,
    setPost: async () => {
        await PromiseGet("posts").then(res => {
            set(() => ({
                post: res,
                postComment:res
            }));
        })
    },
    setComment: async (id:number)=> {
        await PromiseGet(`posts/${id}/comments`).then(res => {
            console.log(res)
            set(() => ({
                comment: res,
            }));
        })
    }
}))

export default usePostStore;