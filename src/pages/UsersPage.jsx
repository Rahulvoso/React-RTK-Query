import { useState } from "react";
import {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} from "../services/userApi";

import useDebounce from "../hooks/useDebounce";
import SearchBox from "../components/SearchBox";
import UserTable from "../components/UserTable";
import UserModal from "../components/UserModal";
import Pagination from "../components/Pagination";

export default function UsersPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);

    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const { data = [], isLoading } = useGetUsersQuery({
        page,
        limit: 5,
        search: debouncedSearch,
    });

    const [createUser] = useCreateUserMutation();
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const handleSave = async (form) => {
        if (form.id) {
            await updateUser(form);
        } else {
            await createUser(form);
        }

        setOpen(false);
        setEditData(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Users Management
                    </h1>
                    <p className="text-gray-500">
                        Manage all registered users
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="mt-3 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
                >
                    + Add User
                </button>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500">Total Users</p>
                    <h2 className="text-2xl font-bold">
                        {data?.length || 0}
                    </h2>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500">Page</p>
                    <h2 className="text-2xl font-bold">{page}</h2>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500">Search</p>
                    <h2 className="text-2xl font-bold truncate">
                        {debouncedSearch || "All Users"}
                    </h2>
                </div>

            </div>

            {/* SEARCH + TABLE CARD */}
            <div className="bg-white shadow-lg rounded-xl p-5">

                {/* SEARCH */}
                <div className="mb-4">
                    <SearchBox
                        value={search}
                        onChange={(val) => {
                            setSearch(val);
                            setPage(1);
                        }}
                    />
                </div>

                {/* LOADING */}
                {isLoading && (
                    <p className="text-center py-10 text-gray-500">
                        Loading users...
                    </p>
                )}

                {/* EMPTY STATE */}
                {!isLoading && data.length === 0 && (
                    <p className="text-center py-10 text-gray-400">
                        No users found
                    </p>
                )}

                {/* TABLE */}
                {!isLoading && data.length > 0 && (
                    <UserTable
                        users={data}
                        onEdit={(u) => {
                            setEditData(u);
                            setOpen(true);
                        }}
                        onDelete={deleteUser}
                    />
                )}

                {/* PAGINATION */}
                <div className="mt-5 flex justify-end">
                    <Pagination page={page} setPage={setPage} />
                </div>

            </div>

            {/* MODAL */}
            <UserModal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditData(null);
                }}
                onSave={handleSave}
                editData={editData}
            />
        </div>
    );
}