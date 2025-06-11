import React, { useState } from 'react';

const MyReferral = () => {
  const [referralCount, setReferralCount] = useState(0);
  const [teamViewCount, setTeamViewCount] = useState(0);
  const [showReferral, setShowReferral] = useState(false);
  const [showTeamView, setShowTeamView] = useState(false);
  const [inputReferralCount, setInputReferralCount] = useState(0);
  const [inputTeamViewCount, setInputTeamViewCount] = useState(0);

  // Dummy data for referrals
  const referralData = [
    { name: "Ramesh", mobile: "9960460249", date: "12-2-25 12:35" },
    { name: "Omkar", mobile: "12345678", date: "12-2-25 12:35" },
    { name: "Alice", mobile: "98765432", date: "12-3-25 10:15" },
    { name: "Bob", mobile: "87654321", date: "12-4-25 09:45" },
    { name: "Charlie", mobile: "76543210", date: "12-5-25 14:20" },
    { name: "David", mobile: "65432109", date: "12-6-25 16:30" },
    { name: "Eve", mobile: "54321098", date: "12-7-25 11:10" },
    { name: "Frank", mobile: "43210987", date: "12-8-25 13:25" },
    { name: "Grace", mobile: "32109876", date: "12-9-25 08:50" },
    { name: "Hank", mobile: "21098765", date: "12-10-25 15:40" },
  ];

  // Dummy data for team view
  const teamViewData = [
   { name: "Ramesh", mobile: "9960460249", date: "12-2-25 12:35" },
    { name: "Omkar", mobile: "12345678", date: "12-2-25 12:35" },
    { name: "Alice", mobile: "98765432", date: "12-3-25 10:15" },
    { name: "Bob", mobile: "87654321", date: "12-4-25 09:45" },
    { name: "Charlie", mobile: "76543210", date: "12-5-25 14:20" },
    { name: "David", mobile: "65432109", date: "12-6-25 16:30" },
    { name: "Eve", mobile: "54321098", date: "12-7-25 11:10" },
    { name: "Frank", mobile: "43210987", date: "12-8-25 13:25" },
    { name: "Grace", mobile: "32109876", date: "12-9-25 08:50" },
    { name: "Hank", mobile: "21098765", date: "12-10-25 15:40" },
  ];

  const toggleReferralVisibility = () => {
    if (showReferral) {
      setShowReferral(false);
    } else {
      setReferralCount(inputReferralCount);
      setShowReferral(true);
    }
  };

  const toggleTeamViewVisibility = () => {
    if (showTeamView) {
      setShowTeamView(false);
    } else {
      setTeamViewCount(inputTeamViewCount);
      setShowTeamView(true);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-xl font-bold">My Referral</div>

      {/* Total No Referral */}
      <div className="bg-white shadow rounded p-4">
        <div className="flex items-center space-x-4">
          <div className="text-lg font-semibold">
            Total No Referral: <span className="font-bold">{referralCount}</span>
          </div>
          <input
            type="number"
            value={inputReferralCount}
            onChange={(e) => setInputReferralCount(parseInt(e.target.value, 10))}
            className="border rounded px-2 py-1"
            placeholder="Enter count"
          />
          <button
            onClick={toggleReferralVisibility}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showReferral ? 'Hide Referrals' : 'Show Referrals'}
          </button>
        </div>
        {showReferral && (
          <table className="w-full table-auto border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {referralData.slice(0, referralCount).map((referral, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{referral.name}</td>
                  <td className="border px-4 py-2">{referral.mobile}</td>
                  <td className="border px-4 py-2">{referral.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Team View */}
      <div className="bg-white shadow rounded p-4">
        <div className="text-lg font-semibold mb-2">Team View</div>
        <div className="mb-4">Request to Admin for team view</div>
        <div className="flex items-center space-x-4">
          <div className="text-lg font-semibold">
            Total Referral: <span className="font-bold">{teamViewCount}</span>
          </div>
          <input
            type="number"
            value={inputTeamViewCount}
            onChange={(e) => setInputTeamViewCount(parseInt(e.target.value, 10))}
            className="border rounded px-2 py-1"
            placeholder="Enter count"
          />
          <button
            onClick={toggleTeamViewVisibility}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showTeamView ? 'Hide Team View' : 'Show Team View'}
          </button>
        </div>
        {showTeamView && (
          <table className="w-full table-auto border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {teamViewData.slice(0, teamViewCount).map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{member.name}</td>
                  <td className="border px-4 py-2">{member.mobile}</td>
                  <td className="border px-4 py-2">{member.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyReferral;
