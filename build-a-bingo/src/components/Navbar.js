import React from 'react';

function Navbar() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
      backgroundColor: '#333',
      color: '#fff',
      padding: '0 20px',
    },
    ul: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    li: {
      margin: '0 10px',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a href="#" style={styles.a}>Create</a>
        </li>
        <li style={styles.li}>
          <a href="#" style={styles.a}>Explore</a>
        </li>
        <li style={styles.li}>
          <a href="#" style={styles.a}>Profile</a>
        </li>
        <li style={styles.li}>
          <a href="#" style={styles.a}>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
