import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// [positive, neutral, negative]
const COLORS = ["#81C784", "#29B6F6", "#EF5350"];

const PieChartComp = (props) => {
    const data = props.data;
    return (
        <div style={{marginTop: 110}}>
            <PieChart width={400} height={600}>
                <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={90}
                outerRadius={170}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip contentStyle={{backgroundColor: '#ECF0F1', border: 'none', borderRadius: 5}} cursor={{ stroke: 'red', strokeWidth: 2 }} />
            </PieChart>
        </div>

    )
}

export default PieChartComp
