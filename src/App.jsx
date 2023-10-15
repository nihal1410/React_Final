import React from "react";
function Home() {
  const tableData = [
    { id: 1, name: "Task 1", link: "https://react-task1-liart.vercel.app/", github: "https://github.com/nihal1410/React_Task1" },
    { id: 2, name: "Task 2", link: "https://react-task2-tan-zeta.vercel.app/", github: "https://github.com/nihal1410/React_Task2" },
    { id: 3, name: "Task 3", link: "https://react-task3-swart.vercel.app/", github: "https://github.com/nihal1410/React_Task3" },
    { id: 4, name: "Task 4", link: "https://react-task4-psi-eight.vercel.app/", github: "https://github.com/nihal1410/React_Task4" },
    { id: 5, name: "Task 5", link: "https://react-task5-red-pi.vercel.app/", github: "https://github.com/nihal1410/React_Task5" },
    { id: 6, name: "Task 6", link: "https://react-task6-livid.vercel.app/", github: "https://github.com/nihal1410/React_Task6" },
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
