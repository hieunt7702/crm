import { useStore } from "@app/core/context";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const UserScreen = observer(() => {
    const { authStore } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        authStore.logout();
        navigate("/login");
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Chào mừng bạn!</h1>
            <p>Đây là trang Home (User Dashboard) sau khi đăng nhập thành công.</p>
            <div style={{ marginTop: "2rem" }}>
                <button 
                    onClick={handleLogout}
                    style={{
                        padding: "0.5rem 2rem",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    Đăng Xuất (Xóa Token)
                </button>
            </div>
        </div>
    );
});
