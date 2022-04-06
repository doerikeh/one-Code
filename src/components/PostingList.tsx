import { ChatIcon } from "@heroicons/react/outline";

export interface PostingListProps {
    key:number;
    title: string;
    body:string;
    comments: number;
    username:string;
}

export default function PostingList({ title, body, username, key, comments }: PostingListProps) {
  return (
    <div
      className="mx-8 md:mx-12 lg:mx-24 xl:mx-36 pt-2 bg-gray-50 md:bg-white md:shadow-lg dark:bg-gray-900 md:dark:bg-gray-50
                     md:p-6 md:rounded-lg mb-10 flex justify-between items-center"
      key={key}
    >
      <a href="/author/ahampriyanshu@gmail.com/">
        <div className="flex">
          <div className="mr-4">
            <img
              className="overflow-hidden w-12 h-12 object-cover rounded-full"
              src="https://ahampriyanshu.com/blog/logo.png"
              alt="avatar"
            />
          </div>
          <div>
            <p className="sm:text-sm md:text-lg lg:text-xl font-medium text-gray-900 dark:text-gray-900">
              {username}
            </p>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
             {title}
            </p>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
             {body}
            </p>
            <div className="flex mt-5 items-center">
              <div className="flex items-center">
                <ChatIcon
                  className="h-10 w-10 text-blue-700"
                  aria-hidden="true"
                />
                <p className="text-xs md:text-lg text-gray-600 dark:text-gray-400">
                  {comments}
                </p>
              </div>
              <div className="ml-10">
                <p className="text-xs md:text-lg text-blue-600 dark:text-blue-400">
                  Detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
