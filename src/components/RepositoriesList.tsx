import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form className="is-flex navbar is-fixed-top" onSubmit={onSubmit}>
        <input
          className="input m-3 is-link"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="button m-3 is-link is-outlined">Search</button>
      </form>
      <div className="m-6">{error && <h3>{error}</h3>}</div>
      <div className="m-6">{loading && <h3>Loading...</h3>}</div>
      <div className="container is-max-desktop m-6">
        {!error &&
          !loading &&
          data.map((x) => (
            <div className="box m-1" key={x.name}>
              <b>
                <a href={x.npm} rel="noreferrer" target="_blank">
                  {x.name}
                </a>{" "}
              </b>
              - {x.description}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RepositoriesList;
