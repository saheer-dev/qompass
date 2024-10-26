import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableRow, Link } from '@mui/material';
import { ThemeContext } from '../../Home';
import truck from '../../../assets/logo-truck.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalPopup() {
    const { setOrder, open, handleClose } = React.useContext(ThemeContext);

    const handleConform = () => {
        setOrder([]);
        handleClose()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={truck} alt="logo" className='mx-auto w-20' />
                    <Typography 
                        id="modal-modal-title" 
                        variant="subtitle1"  // Use a smaller variant
                        component="h2" 
                        textAlign="center"
                        sx={{ fontSize: "1rem" }}  // Or specify a custom font size
                        >
                        Your Booking is Confirmed, Thank you!
                        </Typography>
                        <Typography 
                        textAlign="center" 
                        sx={{ mb: 2, fontSize: "0.875rem" }}  // Set a custom font size
                        >
                        Order confirmation details sent to Mobile and email
                    </Typography>
                    <Table>
                        <TableBody>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>  {/* Adjust padding and margin */}
                            <TableCell style={{ padding: "4px" }}>Booked on</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>20-03-2024</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>AWB ID</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>RTBLR98752</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>From</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>FortKochi - 682001</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>To</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>Kasaragod - 671121</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>Total Distance</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>612kms</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>Product Category</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>Electronics</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>Amount Paid</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>₹2967.00</TableCell>
                            </TableRow>
                            <TableRow style={{ padding: "2px", margin: "2px" }}>
                            <TableCell style={{ padding: "4px" }}>EST Delivery Date</TableCell>
                            <TableCell align="right" style={{ padding: "4px" }}>ORD123456</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Box display="flex" justifyContent="center" mt={3}>
                        <Button onClick={handleConform}
                            variant="contained"
                            sx={{ backgroundColor: 'blue', color: 'white', mr: 2, fontSize: "10px" }}
                        >
                            View Order Confirmation
                        </Button>
                        <Button onClick={handleClose}
                            variant="outlined"
                            sx={{ backgroundColor: 'white', color: 'blue', borderColor: 'blue', fontSize: "10px" }}
                        >
                            Download Receipt
                        </Button>
                    </Box>
                    <Box textAlign="center" mt={2}>
                        <Typography style={{color: "blue"}} onClick={handleClose}>
                            Create another order
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
