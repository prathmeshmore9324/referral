import React, { useState } from 'react';

const AdminReferralRequests = () => {
  const [selectedName, setSelectedName] = useState('');
  const [showReferralSection, setShowReferralSection] = useState(false);
  const [showReferralLink, setShowReferralLink] = useState(false);
  const [requests, setRequests] = useState([
    { id: 1, name: 'Ramesh', count: 5, mb: '9960460249', email: 'ramesh@example.com', reside: 'left', date: '10-06-2025' },
    { id: 2, name: 'Omkar', count: 3, mb: '12345678', email: 'omkar@example.com', reside: 'right', date: '09-06-2025' },
    { id: 3, name: 'Alice', count: 4, mb: '98765432', email: 'alice@example.com', reside: 'left' },
    { id: 4, name: 'Bob', count: 6, mb: '87654321', email: 'bob@example.com', reside: 'right' },
    { id: 5, name: 'Charlie', count: 2, mb: '76543210', email: 'charlie@example.com', reside: 'left' },
    // { id: 6, name: 'David', count: 7, mb: '65432109', email: 'david@example.com', reside: 'right' },
    // { id: 7, name: 'Eve', count: 1, mb: '54321098', email: 'eve@example.com', reside: 'left' },
    // { id: 8, name: 'Frank', count: 8, mb: '43210987', email: 'frank@example.com', reside: 'right' },
    // { id: 9, name: 'Grace', count: 9, mb: '32109876', email: 'grace@example.com', reside: 'left' },
    // { id: 10, name: 'Hank', count: 10, mb: '21098765', email: 'hank@example.com', reside: 'right' },
  ]);

  const handleView = (name) => {
    setSelectedName(name);
    setShowReferralSection(true);
    setShowReferralLink(false);
  };

  const handleApprove = () => {
    console.log(`Approved request for ${selectedName}`);
    setShowReferralLink(true);
  };

  const handleReject = () => {
    console.log(`Rejected request for ${selectedName}`);
    setShowReferralSection(false);
  };

  const handleSubmit = (name) => {
    console.log(`Submitted link for ${name}`);
  };

  const leftReferrals = requests.filter(request => request.reside === 'left');
  const rightReferrals = requests.filter(request => request.reside === 'right');

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Admin End - Referral Requests</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">ID</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Count</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">{request.id}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{request.name}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{request.count}</td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <button
                      onClick={() => handleView(request.name)}
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showReferralSection && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Referral</h2>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-3">Request</h3>
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">{selectedName} has requested for team view</p>
              <button
                onClick={handleApprove}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded"
              >
                Approve
              </button>
              <button
                onClick={handleReject}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
              >
                Reject
              </button>
            </div>
          </div>

          {showReferralLink && (
            <div className="mt-6">
              <h3 className="font-medium text-gray-800 mb-3">Referral Link</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Name</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Email</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Reside</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">{request.name}</td>
                        <td className="py-3 px-4 border-b border-gray-200">{request.email}</td>
                        <td className="py-3 px-4 border-b border-gray-200">
                          <select className="border border-gray-300 rounded px-2 py-1 bg-white">
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200">
                          <button
                            onClick={() => handleSubmit(request.name)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded"
                          >
                            Submit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default AdminReferralRequests;
