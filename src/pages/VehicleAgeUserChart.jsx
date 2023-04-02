import React from 'react'
import PieChart from '../components/PieChart';
import { usersInfo } from '../utils/generateUsers'

export default function VehicleAgeUserChart() {

  const vehicleAgeInfo = usersInfo.reduce((acc, user) => {
    acc[user.vehicle_age] = (acc[user.vehicle_age] || 0) + 1;
    return acc;
  }, {})

  const vehicleAgeData = {
    labels: Object.keys(vehicleAgeInfo),
    datasets: [
      {
        label: "Vehicle by thier Age",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8A80", "#80D8FF"],
        data: Object.values(vehicleAgeInfo),
      },
    ],
  }
  return (
    <div>
      <h2>A pie chart for vehicle-age data</h2>
      <PieChart data={vehicleAgeData} />
    </div>
  )
}
