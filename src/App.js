import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CardProject from './components/cardProject';
import data from './data/data-dummy';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 mb-5">Project Studi Independent</h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {
              data.map(e => (
                <CardProject
                  project={e.project}
                  nama_project={e.nama_project}
                  penyusun={e.penyusun} />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
