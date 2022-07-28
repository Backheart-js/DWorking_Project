import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import { Document, Storage, Message, Work, Schedule, Report } from './pages';

function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Document />} >
              
            </Route>
            <Route path="/storage" element={<Storage />} />
            <Route path="/message" element={<Message />} />
            <Route path="/work" element={<Work />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
