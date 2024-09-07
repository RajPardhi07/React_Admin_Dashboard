import Chart from "../components/Chart"
import Featured from "../components/Featured"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import TableList from "../components/Table"
import Widget from "../components/Widget"

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">

        <div>

          <Sidebar />
        </div>

        <div className="mt-14 ml-4 w-[88vw] ">

          <div className="flex gap-5 p-5">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />

          </div>

          <div className="py-[5px] flex px-[20px]">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>

          <div className="p-5 m-5 shadow-xl">
            <div className="font-semibold text-[20px] p-1">Lastest Transaction</div>
            <TableList/>
          </div>

        </div>
      </div>





    </div>
  )
}

export default Home