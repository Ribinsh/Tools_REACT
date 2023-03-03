import React from "react";

function userBlock() {
  return (
    <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div class="bg-white px-16 py-14 rounded-md text-center">
        <h1 class="text-xl mb-4 font-bold text-slate-500">
          Do you Want Block
        </h1>
        <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white">
          Cancel
        </button>
        <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
          Ok
        </button>
      </div>
    </div>
  );
}

export default userBlock;
