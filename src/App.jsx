import Header from "./components/Header";
import Quiz from "./components/Quiz";
import githubLogo from "./assets/github-logo.png";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Quiz />
        <a
          href="https://github.com/Ouss-tagh-dev/react-quiz-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub logo" className="github-link" />
        </a>
      </main>
    </div>
  );
}

export default App;
