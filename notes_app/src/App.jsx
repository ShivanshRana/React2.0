import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);
  const onSubmission = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, desc });
    setTask(copyTask);

    console.log("value submitted");
    setTitle("");
    setDesc("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1); // idx se shuru krna or 1 hi todna
    setTask(copyTask);
  };

  return (
    <div className=" h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          onSubmission(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10  flex-col items-start "
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter title here"
          className="w-full border-2 px-2 py-5 rounded-2xl"
        />
        <textarea
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
          type="text"
          placeholder="Enter details here"
          className="w-full h-40 border-2 px-2 py-5 rounded-2xl"
        />
        <button className=" active:scale-95 border-4 px-5 py-2 rounded w-full bg-white text-black">
          Write Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start text-black h-52 g-cover w-40 rounded-2xl bg-white"
              >
                <h3 className="px-2 py-2 leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-500">
                  {elem.desc}
                </p>
                <button
                  onClick={(idx) => {
                    deleteNote(idx);
                  }}
                  className=" w-full cursor-pointer active:scale-95 text-xs font-bold rounded bg-red-500 py-1 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
//  local storage  in key value pair
// localStorage.getItem('key')
// localStorage.setItem('key','value')
// localStorage.removeItem('key')
// localStorage.clear()
//To save object we use json.stringify(name)
//to again get object json.parse(name)
