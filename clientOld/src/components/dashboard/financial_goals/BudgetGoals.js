import React, {useState} from 'react';
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '../../muiImports/general/General';
import {
    AddIcon,
    CategoryIcon,
    DateRangeIcon,
    MonetizationOnIcon,
    EditIcon,
    DeleteIcon,
    IconButton,
} from '../../muiImports/icons/Icons';


const budgetData = [
    { category: 'Food', date: '2023-07-01', amount: '$50', transaction: 'Expense' },
    { category: 'Groceries', date: '2023-07-02', amount: '$100', transaction: 'Expense' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
    { category: 'Salary', date: '2023-07-03', amount: '$2000', transaction: 'Income' },
];

const itemsPerPage = 6;

const BudgetingPage = () => {
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    // Calculate the start and end index of items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the current page items
    const currentItems = budgetData.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(budgetData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Grid
            container
            justifyContent="center"
        >
            <Grid item container
                  justifyContent="center"
            >
                <Paper elevation={3} style={{ padding: '1.5rem', position: 'relative', backgroundColor: 'darkgray', width: '60%' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Budgets
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                        endIcon={<AddIcon />}
                        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                    >
                        New Budget
                    </Button>
                    <TableContainer component={Paper} style={{ marginTop: '1rem', backgroundColor: 'lightgray' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentItems.map((budgetItem, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <CategoryIcon style={{ marginRight: '0.5rem' }} />
                                            {budgetItem.category}
                                        </TableCell>
                                        <TableCell>
                                            <DateRangeIcon style={{ marginRight: '0.5rem' }} />
                                            {budgetItem.date}
                                        </TableCell>
                                        <TableCell>
                                            <MonetizationOnIcon style={{ marginRight: '0.5rem' }} />
                                            {budgetItem.amount}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton color="primary" aria-label="Edit" title="Edit" component="span">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color="error" aria-label="Delete" title="Delete" component="span">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            disabled={currentPage === 1}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </Button>
                        <Typography variant="body1" style={{ margin: '0 1rem' }}>
                            Page {currentPage} of {totalPages}
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                        >
                            Next
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default BudgetingPage;