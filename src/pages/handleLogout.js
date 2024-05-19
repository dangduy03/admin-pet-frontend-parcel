export const handleLogout = (history) => {
    localStorage.removeItem("token");
    history.push('/login');
};