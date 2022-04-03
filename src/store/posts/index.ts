import create, { State } from "zustand";
import { Posts } from "../../utils/interface/posts";
import PromiseGet from "../../utils/promise/promise";

export interface PostStore extends State {
    post: Posts[];
    isLoadingAccount: boolean;
    setPost: () => void;
}

const usePostStore = create<PostStore>((set) => ({
    isLoadingAccount: false,
    post: [],
    setPost: async () => {
        set(() => ({
            isLoadingAccount: true,
        }));
        await PromiseGet("posts").then(res => {
            set(() => ({
                post: res,
                isLoadingAccount: false,
            }));
        })

    }
}))

export default usePostStore;