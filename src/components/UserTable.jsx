export default function UserTable({
    users = [],
    onEdit,
    onDelete,
}) {
    return (
        <div className="w-full overflow-x-auto">

            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">

                {/* HEADER */}
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="text-left p-4 text-sm font-semibold text-gray-600">
                            Name
                        </th>

                        <th className="text-left p-4 text-sm font-semibold text-gray-600">
                            Email
                        </th>

                        <th className="text-center p-4 text-sm font-semibold text-gray-600">
                            Actions
                        </th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>

                    {users.length === 0 ? (
                        <tr>
                            <td
                                colSpan="3"
                                className="text-center p-10 text-gray-400"
                            >
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((u) => (
                            <tr
                                key={u.id}
                                className="border-b hover:bg-gray-50 transition"
                            >

                                {/* NAME */}
                                <td className="p-4 font-medium text-gray-800">
                                    {u.name}
                                </td>

                                {/* EMAIL */}
                                <td className="p-4">
                                    <span className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
                                        {u.email}
                                    </span>
                                </td>

                                {/* ACTIONS */}
                                <td className="p-4">
                                    <div className="flex justify-center gap-2">

                                        {/* EDIT */}
                                        <button
                                            onClick={() => onEdit(u)}
                                            className="px-3 py-1 text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition"
                                        >
                                            Edit
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() => onDelete(u.id)}
                                            className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </td>

                            </tr>
                        ))
                    )}

                </tbody>
            </table>

        </div>
    );
}