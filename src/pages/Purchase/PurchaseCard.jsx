import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  useFlutterwave,
  closePaymentModal,
  FlutterWaveButton,
} from "flutterwave-react-v3";
import { Button, TextField, Typography } from "@mui/material";
import img6 from "../../images/img6.jpg";
import { grey } from "@mui/material/colors";
import { Payment } from "@mui/icons-material";

export default function PurchaseCard() {
  const [data, setData] = useState({});
  const [matched, setMatched] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const config = {
    public_key: process.env.REACT_APP_FLKEY,
    tx_ref: Date.now(),
    amount: 300,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: data.email,
      phonenumber: data.phonenumber,
      name: data.name,
    },
    customizations: {
      title: "A Level Scratch Card",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  const handleFlutterPayment = useFlutterwave(config);
  return (
    <div>
      <Container className="shadow-md rounded-3 mt-3 ">
        <Row>
          <div className="col-md-6 border-end">
            <img src={img6} className="img-fluid rounded-3" alt="" />
            <div className="mt-3 border p-3">
              <Typography>
                Purcahse your A'Level pin for as low as low as N2,000.00 only
              </Typography>
            </div>
          </div>
          <div
            style={{ backgroundColor: grey[50] }}
            className="col-md-6 d-flex align-items-center"
          >
            <div className="ms-4">
              <Typography className="mb-3">
                {" "}
                Please fill out the form below
              </Typography>
              <div className="mb-3">
                <TextField
                  label="Name"
                  helperText="Enter your name"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <TextField
                  label="Email "
                  helperText="Enter your email address"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={matched}
                />
              </div>
              <div className="mb-3">
                <TextField
                  label="Confirm email"
                  helperText="Confirm email address"
                  type="email"
                  name="confirmEmail"
                  value={data.confirmEmail}
                  onChange={handleChange}
                  onBlur={() => {
                    if (data.email !== data.confirmEmail) setMatched(true);
                    else setMatched(false);
                  }}
                  error={matched}
                />
              </div>
              <div className="mb-3">
                <TextField
                  label="Phone number "
                  helperText="Enter your phone number"
                  type="tel"
                  name="phonenumber"
                  value={data.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <Button
                variant="text"
                color="error"
                endIcon={<Payment />}
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Pay now
              </Button>
              {/* <FlutterWaveButton {...fwConfig} /> */}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
