import React from "react";
import UserModal from "./UserModal";

function UserModalContainer(props) {
    return <UserModal {...props} />;
}

// 🔥 Prevent unnecessary re-render
export default React.memo(UserModalContainer);