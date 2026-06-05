import { useState, useEffect } from "react";

export default function UserModal({
    open,
    onClose,
    onSave,
    editData,
}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setEmail(editData.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [editData, onSave]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded w-96">
                <h2 className="text-xl font-bold mb-3">
                    {editData ? "Edit User" : "Add User"}
                </h2>

                <input
                    className="border p-2 w-full mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />

                <input
                    className="border p-2 w-full mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <div className="flex justify-end gap-2">
                    <button onClick={onClose}>Cancel</button>

                    <button
                        className="bg-blue-500 text-white px-3 py-1"
                        onClick={() =>
                            onSave({
                                id: editData?.id,
                                name,
                                email,
                            })
                        }
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}