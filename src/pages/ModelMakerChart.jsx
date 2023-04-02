import React from 'react'
import PieChart from '../components/PieChart';
import { usersInfo } from '../utils/generateUsers';

export default function ModelMakerChart() {
  const modelCount = usersInfo.reduce((acc, user) => {
    return{...acc, [user.vehicle_make]: acc[user.vehicle_make] ? [...acc[user.vehicle_make], user.vehicle_model] : [user.vehicle_model]}
  }, {});

  const modelCountData = {
    label: Object.keys(modelCount),
    datasets: [
      {
        label: "Models by Manufacturers",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8A80", "#80D8FF"],
        data: Object.keys(modelCount)?.map((model) => new Set(modelCount[model]).size),
      },
    ],
  }

  return (
    <div>
      <h2>A pie chart for vehicle Model-Manufacturer data</h2>
      <PieChart data={modelCountData} />
    </div>
  )
}
