import Footer from "@/components/Footer";
import { UserModel } from "@app/core";
import { observer } from "mobx-react-lite";

interface Props {
    users: UserModel[];
    loading: boolean;
    error: string | null;
    onReload(): void;
}

export const UserListView = observer(
    ({ users, loading, error, onReload }: Props) => {
        if (loading) return <p>Loading users...</p>;

        if (error)
            return (
                <div>
                    <p style={{ color: "red" }}>{error}</p>
                    <button onClick={onReload}>Retry</button>
                </div>
            );

        return (
            <div>
                <Footer />
                <h2>User List</h2>

                <button onClick={onReload}>Reload</button>

                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            <strong>{u.name}</strong> – {u.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
);
