import { useStore } from "@app/core/context";
import { observer } from "mobx-react-lite";
import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

export const AuthGuard = observer(() => {
    const { authStore } = useStore();

    if (!authStore.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
});

