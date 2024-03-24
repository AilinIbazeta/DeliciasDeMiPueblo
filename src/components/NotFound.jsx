import React from 'react'

export const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 NOT FOUND</h1>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
}

export default NotFound
