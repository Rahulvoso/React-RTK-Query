import React from "react";

function UserTable({ users, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">

            <table className="w-full border-collapse">

                {/* HEADER */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left p-4">Name</th>
                        <th className="text-left p-4">Email</th>
                        <th className="text-center p-4">Actions</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>

                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center p-10">
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((u) => (
                            <tr
                                key={u.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-4">{u.name}</td>

                                <td className="p-4 text-blue-600">
                                    {u.email}
                                </td>

                                <td className="p-4 text-center">
                                    <div className="flex justify-center gap-2">

                                        <button
                                            onClick={() => onEdit(u)}
                                            className="px-3 py-1 bg-yellow-400 text-white rounded"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => onDelete(u.id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded"
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

// ✅ CRITICAL PERFORMANCE FIX
export default React.memo(UserTable);