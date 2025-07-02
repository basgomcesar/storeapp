
const Home = () => {

  return (
    <div>
      <main>
        <h1>Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</h1>
        <p>Your one-stop shop for all things e-commerce.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} ProStore. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Home;
