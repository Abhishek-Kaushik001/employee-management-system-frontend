function Header({ user, setUser }) {

  const logOutUser = () => {
    setUser(null);
  };

  return (
    <div className="flex justify-between items-start">

      <div>
        <h1 className="text-2xl sm:text-3xl font-medium text-white">
          Good Morning 👋
        </h1>

        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          {user?.name || "Admin"}
        </h2>
      </div>


      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg"
      >
        Log Out
      </button>

    </div>
  );
}

export default Header;