import React from "react";
function Home() {
  const tableData = [
    { id: 1, name: "Task 1", link: "https://ethnus-react-task-1-chi.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_1" },
    { id: 2, name: "Task 2", link: "https://ethnus-react-task-2-three.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_2" },
    { id: 3, name: "Task 3", link: "https://ethnus-react-task-3-eight.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_3" },
    { id: 4, name: "Task 4", link: "https://ethnus-react-task-4-ten.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_4" },
    { id: 5, name: "Task 5", link: "https://ethnus-react-task-5-virid.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_5" },
    { id: 6, name: "Task 6", link: "https://ethnus-react-task-6-kappa.vercel.app/", github: "https://github.com/Amankrishan14/ETHNUS-react_task_6" },
  ];
  return (
    <>
      <h2 className="text-center m-4">MERN Projects [Set-2]</h2>
      <div className=" flex justify-center items-center">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Link
                </th>
                <th scope="col" class="px-6 py-3">
                  github
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr class="bg-white border-b ">
                    <td class="px-6 py-4">{item.id}</td>
                    <td class="px-6 py-4">{item.name}</td>
                    <td class="px-6 py-4 text-blue-800">
                      <a href={item.link}> {item.name}</a>
                    </td>
                    <td class="px-6 py-4 text-blue-800">
                      <a href={item.github}> {item.name}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
