import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer  } from 'recharts';

export default class LineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-connect-nulls-mdh0c';

  data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Sep',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Oct',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Nov',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            width={90}
            height={250}
            data={this.data}
            margin={{
              top: 25,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        
      </div>
    );
  }
}
