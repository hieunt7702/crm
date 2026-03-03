import { useStore } from "@app/core/context";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const LoginScreen = observer(() => {
    const { authStore } = useStore();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Giả lập login thành công
        authStore.login("mock_access_token", "mock_refresh_token");
        navigate("/user");
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Đăng Nhập</h1>
            <p>Vui lòng đăng nhập để tiếp tục</p>
            <button 
                onClick={handleLogin}
                style={{
                    padding: "0.5rem 2rem",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                Login (Demo)
            </button>
        </div>
    );
});
