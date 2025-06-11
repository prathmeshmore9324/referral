import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyReferral from './pages/MyReferral';
import AdminReferralRequests from './pages/AdminReferralRequests';
import CombinedReferrals from './pages/CombinedReferrals';

function App() {
  // Dummy data for referrals
  const referralData = [
    { id: 1, name: "Ramesh", mb: "9960460249", date: "12-2-25 12:35", reside: 'left' },
    { id: 2, name: "Omkar", mb: "12345678", date: "12-2-25 12:35", reside: 'right' },
    { id: 3, name: "Alice", mb: "98765432", date: "12-3-25 10:15", reside: 'left' },
    { id: 4, name: "Bob", mb: "87654321", date: "12-4-25 09:45", reside: 'right' },
    { id: 5, name: "Charlie", mb: "76543210", date: "12-5-25 14:20", reside: 'left' },
    { id: 6, name: "David", mb: "65432109", date: "12-6-25 16:30", reside: 'right' },
    { id: 7, name: "Eve", mb: "54321098", date: "12-7-25 11:10", reside: 'left' },
    { id: 8, name: "Frank", mb: "43210987", date: "12-8-25 13:25", reside: 'right' },
    { id: 9, name: "Grace", mb: "32109876", date: "12-9-25 08:50", reside: 'left' },
    { id: 10, name: "Hank", mb: "21098765", date: "12-10-25 15:40", reside: 'right' },
  ];

  // Categorize the data into left and right referrals
  const leftReferrals = referralData.filter(referral => referral.reside === 'left');
  const rightReferrals = referralData.filter(referral => referral.reside === 'right');

  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Optional Navigation */}
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">My Referrals</Link>
          <Link to="/referrals-overview" className="text-blue-600 hover:underline">Referrals Overview</Link>
          <Link to="/admin-referral-requests" className="text-blue-600 hover:underline">Admin Requests</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MyReferral />} />
          <Route path="/referrals-overview" element={<CombinedReferrals leftReferrals={leftReferrals} rightReferrals={rightReferrals} />} />
          <Route path="/admin-referral-requests" element={<AdminReferralRequests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
