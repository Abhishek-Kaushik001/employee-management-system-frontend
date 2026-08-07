function Header({ user, setUser }) {
  const logOutUser = () => {
    setUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Good Morning 👋 <br />
        <span className="text-3xl font-semibold">
          {user?.name || "Admin"}
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;