import api from '../components/api';

function body() {
  return (
    <div className="App">
      <p>Homepage</p>
      <p>{api().data}</p>

    </div>
  );
}

export default body;
