import React from 'react'
import BarChart from '../components/BarChart'
import { usersInfo } from '../utils/generateUsers';

export default function UserCountryChart() {
  const countryCount = usersInfo.reduce((acc, user) => {
    const country = user.address.split(", ")[2];
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  const countryData = {
    labels: Object.keys(countryCount),
    datasets: [
      {
        label: "Users by Country",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8A80", "#80D8FF"],
        data: Object.values(countryCount),
      },
    ],
  };

  return (
    <div>
      <h2>A bar chart for user-counrty data</h2>
      <BarChart data={countryData} />
    </div>
  )
}
