import React from "react";

const CombinedReferrals = ({ leftReferrals, rightReferrals }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Referrals Overview</h1>

      <div className="flex space-x-4">
        {/* Left Referrals */}
        <div className="w-1/2 bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Left Referrals</h2>
          <div className="bg-gray-50 shadow-sm rounded p-4 mb-4">
            <p className="text-lg font-semibold text-gray-700">
              Left Referral: <span className="text-blue-600 font-bold">{leftReferrals.length}</span>
            </p>
          </div>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {leftReferrals.map((ref, index) => (
                <tr key={ref.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{ref.name}</td>
                  <td className="p-2 border">{ref.mb}</td>
                  <td className="p-2 border">{ref.date || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Referrals */}
        <div className="w-1/2 bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Right Referrals</h2>
          <div className="bg-gray-50 shadow-sm rounded p-4 mb-4">
            <p className="text-lg font-semibold text-gray-700">
              Right Referral: <span className="text-blue-600 font-bold">{rightReferrals.length}</span>
            </p>
          </div>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {rightReferrals.map((ref, index) => (
                <tr key={ref.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{ref.name}</td>
                  <td className="p-2 border">{ref.mb}</td>
                  <td className="p-2 border">{ref.date || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CombinedReferrals;
