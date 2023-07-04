import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart,
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    Grid, Paper, Divider, Typography,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const data2 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomizedLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
    </text>
);

const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
    <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
            {payload.value}
        </text>
    </g>
);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx,
                                   cy,
                                   midAngle,
                                   innerRadius,
                                   outerRadius,
                                   percent,
                                   index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Cashflow = () => {
    return (
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
            {/* First row */}
            <Grid item container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    {/* Total Income Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'green', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Total Income
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $333
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {/* Total Expense Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'red', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Total Expense
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $200
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {/* Balance Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'blue', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Balance
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $133
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {/* Second row */}
            <Grid item container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    {/* Testing Broo Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                Expense By Category
                            </Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    {/* Here We Goo Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                Income vs Expense
                            </Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data2}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 10,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cashflow;