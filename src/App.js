import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import { Document, Storage, Message, Work, Schedule, Report } from './pages';
import DocumentAll from './pages/Document/DocumentAll';

function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route index element={<DocumentAll />} />
        
            <Route path="/document/:title" element={<Document/>} />
            <Route path="/storage/:title" element={<Storage />} />
            <Route path="/message/:title" element={<Message />} />
            <Route path="/work/:title" element={<Work />} />
            <Route path="/schedule/:title" element={<Schedule />} />
            <Route path="/report/:title" element={<Report />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
