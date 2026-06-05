import { useState, useCallback, useMemo } from "react";

import {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} from "../services/userApi";

import useUserModal from "../hooks/useUserModal";

import SearchBox from "../components/SearchBox";
import UserTable from "../components/UserTable";
import UserModalContainer from "../components/UserModalContainer";
import Pagination from "../components/Pagination";

export default function UsersPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const { open, editData, openModal, closeModal } =
        useUserModal();

    const { data = [], isLoading } = useGetUsersQuery({
        page,
        limit: 5,
        search,
    });



    const [createUser] = useCreateUserMutation();
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    // 🔥 STABLE HANDLERS
    const handleEdit = useCallback(
        (user) => {
            openModal(user);
        },
        [openModal]
    );

    const handleDelete = useCallback(
        (id) => {
            deleteUser(id);
        },
        [deleteUser]
    );

    // 🔥 MEMO DATA
    const users = useMemo(() => data, [data]);

    const handleSave = async (form) => {
        if (form.id) {
            await updateUser(form);
        } else {
            await createUser(form);
        }

        closeModal();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* HEADER */}
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Users Management
                </h1>

                <button
                    onClick={() => openModal(null)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    + Add User
                </button>
            </div>

            {/* SEARCH */}
            <SearchBox
                value={search}
                onChange={setSearch}
            />

            {/* LOADING */}
            {isLoading && <p>Loading...</p>}

            {/* TABLE */}
            {!isLoading && (
                <UserTable
                    users={users}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}

            {/* PAGINATION */}
            <div className="flex justify-end mt-4">
                <Pagination page={page} setPage={setPage} />
            </div>

            {/* MODAL (FULL ISOLATION) */}
            <UserModalContainer
                open={open}
                onClose={closeModal}
                onSave={handleSave}
                editData={editData}
            />

        </div>
    );
}