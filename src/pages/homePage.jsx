function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1 className="text-3xl font-bold flex p-10 flex-col">
        <span className="text-4xl text-red-900">Hey {user.userData.name}.</span>
        <br />
        <span>Welcome to Protected Route Project.</span>
      </h1>
    </div>
  );
}

export default HomePage;
