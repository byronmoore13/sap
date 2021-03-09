import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// [positive, neutral, negative]
const COLORS = ["#ccff90", "#82b1ff", "#ff8a80"];

const PieChartComp = (props) => {
    const data = props.data;
    return (
        <div style={{margin: "20px 20px 0px 20px"}}>
            <PieChart width={400} height={360}>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
                <Tooltip contentStyle={{backgroundColor: '#ECF0F1', border: 'none', borderRadius: 5}} cursor={{ stroke: 'red', strokeWidth: 2 }} />
            </PieChart>
        </div>

    )
}

export default PieChartComp
