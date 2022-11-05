import reactLogo from "./assets/react.svg";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "/users/rogerCabral91/repos"
  );

  return (
    <div className="App">
      <h1>Fetching de Repositórios do GitHub</h1>
      <div className="card">
        <ul>
          {isFetching && <p>Carregando...</p>}
          {repositories?.map((repo) => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}:</strong>
                <p>{repo.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
