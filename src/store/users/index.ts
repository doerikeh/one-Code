import create, { State } from "zustand";
import { User } from "../../utils/interface/users";
import PromiseGet from "../../utils/promise/promise";

export interface UserStore extends State {
    currentUser: User | null;
    users: User[];
    isLoadingAccount: boolean;
    getAccount: (currentUser: User) => void;
    setAccount: () => void;
}


const useAccountStore = create<UserStore>((set) => ({
    currentUser: null as User | null,
    isLoadingAccount: false,
    users: [],
    getAccount: (currentUser: User) => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        const users = JSON.parse(localStorage.getItem("user") || "[]");
        set(() => ({
            currentUser: currentUser || users,
        }));
    },
    setAccount: async () => {
        set(() => ({
            isLoadingAccount: true,
        }));
        await PromiseGet("users").then(res => {
            set(() => ({
                users: res,
                isLoadingAccount: false,
            }));
        })

    }
}))

export default useAccountStore;