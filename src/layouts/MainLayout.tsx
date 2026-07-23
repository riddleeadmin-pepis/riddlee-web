type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <header>
        Header
      </header>

      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
}

export default MainLayout;