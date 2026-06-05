import React from "react";

function UserModal({ open, onClose, onSave, editData }) {

    console.log("User Model");

    if (!open) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            id: editData?.id,
            name: e.target.name.value,
            email: e.target.email.value,
        };

        onSave(form);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white p-6 rounded-lg w-96">

                <h2 className="text-xl mb-4">
                    {editData ? "Edit User" : "Add User"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="name"
                        defaultValue={editData?.name || ""}
                        className="border p-2 w-full mb-3"
                        placeholder="Name"
                    />

                    <input
                        name="email"
                        defaultValue={editData?.email || ""}
                        className="border p-2 w-full mb-3"
                        placeholder="Email"
                    />

                    <div className="flex justify-end gap-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-600 text-white rounded"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

// 🔥 IMPORTANT FIX
export default React.memo(UserModal);