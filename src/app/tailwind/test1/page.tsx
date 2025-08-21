const Page = () => {
  return (
    <>
      <div className="text-xl pb-5">Ejemplos uso Tailwinds</div>
      <hr className="pb-5" />
      <a
        className="text-red-500 hover:underline"
        href="https://v3.tailwindcss.com/docs/text-color"
        target="_blank"
      >
        Link a text color en Tailwinds
      </a>
      <div className="text-xs text-black">
        className=&quot;text-xs text-black&quot;
      </div>
      <div className="text-sm text-white">
        className=&quot;text-sm text-white&quot;
      </div>
      <div className="text-base text-slate-50">
        className=&quot;text-base text-slate-50&quot;
      </div>
      <div className="text-lg text-slate-100">
        className=&quot;text-lg text-slate-100&quot;
      </div>
      <div className="text-lg text-slate-200">
        className=&quot;text-lg text-slate-200&quot;
      </div>
      <div className="text-lg text-slate-300">
        className=&quot;text-lg text-slate-300&quot;
      </div>
      <div className="text-lg text-slate-400">
        className=&quot;text-lg text-slate-400&quot;
      </div>
      <div className="text-lg text-slate-500">
        className=&quot;text-lg text-slate-500&quot;
      </div>
      <div className="text-xl">className=&quot;text-xl&quot;</div>
      <div className="text-2xl">className=&quot;text-2xl&quot;</div>
      <hr className="pt-15" />
      <a
        className="text-red-500 hover:underline"
        href="https://flowbite.com/docs/components/buttons/"
        target="_blank"
      >
        Link a botones en Tailwinds
      </a>
      <br />
      <button className="bg-black text-white px-4 py-2 rounded mt-5">
        bg-black text-white px-4 py-2 rounded mt-5
      </button>
      <button className="bg-white text-black px-4 py-2 rounded mt-5 border border-black">
        bg-white text-black px-4 py-2 rounded mt-5 border border-black
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5">
        bg-blue-500 text-white px-4 py-2 rounded mt-5
      </button>
      <button className="mb-10 bg-white text-blue-500 px-4 py-2 rounded mt-5 border border-blue-500">
        $
        {`mb-10 bg-white text-blue-500 px-4 py-2 rounded mt-5 border
        border-blue-500`}
      </button>
      <div className="border border-blue-500">
        {"className='border border-blue-500'"}
        <div className="border border-blue-500 p-10 m-5">
          {`className='border border-blue-500 p-10 m-5'`}
          <div className="border border-blue-500">
            {`className='border border-blue-500'`}
            <button className="bg-blue-500 text-white px-4 py-2 rounded m-5">
              {`className='bg-blue-500 text-white px-4 py-2 rounded m-5'`}
            </button>
            <button className="bg-blue-500 text-white rounded ps-25 pe-30 py-12 px-4">
              {`className='bg-blue-500 text-white rounded ps-25 pe-30 py-12 px-4'`}
            </button>
          </div>
        </div>
      </div>
      <hr className="pt-15" />
      <a
        className="text-red-500 hover:underline"
        href="https://flowbite.com/docs/components/badge/"
        target="_blank"
      >
        Link a badges en Tailwinds
      </a>
      <br />
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
        {`bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5
        rounded-full dark:bg-blue-900 dark:text-blue-300`}
      </span>
      <br />
      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {`bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5
        rounded-full dark:bg-gray-700 dark:text-gray-300`}
      </span>
      <br />
      <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        {`bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5
        rounded-full dark:bg-red-900 dark:text-red-300`}
      </span>

      <hr className="pt-15" />
      <a
        className="text-red-500 hover:underline"
        href="https://flowbite.com/docs/components/badge/"
        target="_blank"
      >
        Link a cards en Tailwinds
      </a>
      <br />
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </>
  );
};

export default Page;
