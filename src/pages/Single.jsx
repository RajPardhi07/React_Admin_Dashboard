import Chart from "../components/Chart"
import Datatable from "../components/Datatable"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import TableList from "../components/Table"
import List from "./List"



const Single = () => {
  return (
    <div className="single overflow-hidden">

      <Navbar />
      <div className="flex">
        <Sidebar />


        <div className="flex mt-12 p-5 gap-5">
          <div className="flex-1  w-[25vw] h-[48vh]  shadow-md p-5 relative">
            <div className="absolute top-0 right-0 p-1 text-[12px] rounded-lg cursor-pointer">Edit</div>
            <h1 className="text-2xl">Information</h1>
            <div>
              <img className="w-16 h-16 rounded-full object-cover mt-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" />

              <div className="mt-2">
                <h1 className="font-bold text-xl">Jane Doe</h1>

                <div className="mt-2">
                  <span className="font-bold text-xl">Email:</span>
                  <span className="itemValue text-xl text-gray-700">janedoe@gmail.com</span>
                </div>
                <div className="mt-2">
                  <span className="font-bold text-xl">Address:</span>
                  <span className="text-xl text-gray-700">Elton st garden Newyork</span>
                </div>

                <div className="mt-2">
                  <span className="font-bold text-xl">Country:</span>
                  <span className="itemValue">USA</span>
                </div>

              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />

          </div>

        </div>
      </div>

      <div className="-mt-[17vw] py-4 w-[85vw]  ml-[11vw]">
      <TableList/>
      </div>




    </div>
  )
}

export default Single