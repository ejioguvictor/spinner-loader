// import './App.css';
import styles from './index.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.loader}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;