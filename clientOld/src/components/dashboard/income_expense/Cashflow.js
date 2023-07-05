import React, { useState } from 'react';
import {
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import {Divider, Grid, Paper, Typography, IconButton} from '../../muiImports/general/General';
import {AttachMoneyIcon, HealthAndSafetyRoundedIcon, FlightRoundedIcon, RestaurantRoundedIcon} from '../../muiImports/icons/Icons';


const categories = ['Health', 'Travel', 'Restaurant'];

// Replace this function with your logic to retrieve the value for each category
const getCategoryValue = (category) => {
    // Add your logic here to retrieve the value for each category
    // For demonstration purposes, let's assume a simple mapping of category names to values
    const categoryValueMap = {
        Health: 400,
        Travel: 300,
        Restaurant: 200,
        // Add more category-value mappings as needed
    };

    return categoryValueMap[category] || 0; // Default value of 0 if category value is not found
};

const data = categories.map((category) => ({
    name: category,
    value: getCategoryValue(category),
}));


const data2 = [
    {
        name: 'Page A',
        Income: 4000,
        Expense: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Income: 3000,
        Expense: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Income: 2000,
        Expense: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Income: 2780,
        Expense: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        Income: 1890,
        Expense: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        Income: 2390,
        Expense: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
];

const CustomizedLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
    </text>
);

const CustomizedAxisTick = ({ x, y, payload }) => (
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
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isCategorySelected = (category) => selectedCategories.includes(category);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Health':
                return <HealthAndSafetyRoundedIcon />;
            case 'Travel':
                return <FlightRoundedIcon />;
            case 'Restaurant':
                return <RestaurantRoundedIcon />;
            default:
                return null;
        }
    };

    return (
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
            {/* First row */}
            <Grid item container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    {/* Total Income Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'darkgray' }}>
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
                    <Paper sx={{ padding: '1rem', backgroundColor: 'darkgray' }}>
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
                    <Paper sx={{ padding: '1rem', backgroundColor: 'darkgray' }}>
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
                    <Paper sx={{ padding: '1rem', backgroundColor: 'darkgray' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            {/* Render category buttons */}
                            {categories.map((category, index) => (
                                <IconButton
                                    key={index}
                                    onClick={() => handleCategoryClick(category)}
                                    color={isCategorySelected(category) ? 'primary' : 'default'}
                                >
                                    {/* Render category icons */}
                                    {getCategoryIcon(category)}
                                </IconButton>
                            ))}
                            <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                Expense By Category
                            </Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={data.filter((entry) => isCategorySelected(entry.name))}
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
                    <Paper sx={{ padding: '1rem', backgroundColor: 'darkgray' }}>
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
                                    <Line type="monotone" dataKey="Income" stroke="#509341" label={<CustomizedLabel />} />
                                    <Line type="monotone" dataKey="Expense" stroke="#9f082a" />
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