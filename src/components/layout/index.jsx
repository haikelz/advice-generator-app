const Layout = ({ children }) => {
  return (
    <div className="container max-w-full text-center flex justify-center items-center min-h-screen p-4">
      {children}
    </div>
  );
};

export default Layout;
