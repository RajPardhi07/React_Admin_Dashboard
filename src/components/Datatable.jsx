import { useState } from "react"
import { userColumns, userRows } from "../datatablesource"
import { Link } from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid"

const Datatable = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to="/single">
                            <div className=" cursor-pointer  outline-none  rounded-md text-center h-12 w-24 bg-green-200">View</div>

                        </Link>
                        <div onClick={() => handleDelete(params.row.id)}
                            className="py-1 px-1 rounded-md cursor-pointer">
                            Delete
                        </div>
                    </div>
                )
            },
        },
    ];
    return (
        <div className="h-[600px] w-[90vw] mt-16 p-5">
            <div className="w-[100%] text-[24px] mb-3 flex items-center justify-between">
                <p> Add new User </p>
                <Link to="/users/new" className="text-green-500 p-1 border-green-400 bg-slate-200  rounded-md">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable