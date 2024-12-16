import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://www.linkedin.com/in/soudabeh-noorollahi/">
            Soudabeh Noorollahi
          </a>
           | My Favorite Books
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p> Developed by Soudabeh with 💓</p>
      </footer>
    </>
  );
}

export default Layout;
