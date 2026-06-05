import { useState, useCallback } from "react";

export default function useUserModal() {
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const openModal = useCallback((data = null) => {
        setEditData(data);
        setOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);
        setEditData(null);
    }, []);

    return {
        open,
        editData,
        openModal,
        closeModal,
    };
}