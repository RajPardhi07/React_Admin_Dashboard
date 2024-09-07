import Datatable from "../components/Datatable"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const List = () => {
  return (

    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <Datatable />

      </div>
    </>
  )
}

export default List