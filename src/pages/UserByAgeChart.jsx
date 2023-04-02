import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import BarChart from '../components/BarChart';
import { AGE_GROUPS } from '../utils/constants';
import { usersInfo } from '../utils/generateUsers';

const UsersByAgeChart = () => {
  const [ageRange, setAgeRange] = useState(null);

  const handleChange = useCallback((selectedOption) => {
    setAgeRange(selectedOption);
  }, []);

  const filteredData = ageRange
    ? usersInfo.filter((user) => user.age >= ageRange.value[0] && user.age <= ageRange.value[1])
    : usersInfo;

  const ageCount = filteredData.reduce((acc, user) => {
    const ageGroup = Math.floor(user.age / 10) * 10;
    return {
      ...acc,
      [ageGroup]: acc[ageGroup] ? acc[ageGroup] + 1 : 1
    };
  }, {});

  const chartData = {
    labels: Object.keys(ageCount).map(age => age + '-' + (parseInt(age) + 9)),
    datasets: [
      {
        label: "Users by Age",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8A80", "#80D8FF"],
        data: Object.values(ageCount),
      },
    ],
  }

  return (
    <div>
      <h2>Chart</h2>
      <Select 
        value={ageRange}
        onChange={handleChange}
        options={AGE_GROUPS}
        placeholder="Select Age Range"
        isClearable
      />
      <BarChart data={chartData} />
    </div>
  );
  }
  export default UsersByAgeChart;
