// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/hVl5q7YIHfe
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Input } from "@/components/ui/input";

// export default function Component() {
//   return (
//     <div className="flex items-center w-full max-w-sm space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2">
//       <SearchIcon className="w-4 h-4" />
//       <Input
//         type="search"
//         placeholder="Search"
//         className="w-full h-8 font-semibold border-0"
//       />
//     </div>
//   );
// }

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g opacity="0.5">
        <path
          d="M14 14L11.1333 11.1333M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
          stroke="#B3B3D1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
