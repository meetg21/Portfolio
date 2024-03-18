import React, { useState } from "react";
import "./ContactUs.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { send } from "emailjs-com";

const ContactUs = () => {
  const initialFormState = {
    from_name: "",
    number: "",
    message: "",
    reply_to: "",
  };

  const [toSend, setToSend] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    send("service_yo2bvte", "template_uypz275", toSend, "YcZ9zK5-os-yA9WwB")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend(initialFormState);
        setLoading(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div id="contact" className="mainhead">
        <Container maxWidth="sm">
          <Box className="contactus-container">
            <Typography
              variant="h4"
              style={{
                color: "#FFFFFF",
                marginBottom: "30px",
                textAlign: "center",
                fontFamily: "Cormorant Upright",
              }}
            >
              Lets get in Touch!
            </Typography>
            <form onSubmit={onSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                margin="normal"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                fullWidth
                style={{
                  backgroundColor: "transparent",
                  marginBottom: "10px",
                  width: "70%",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",

                  display: "block",
                }}
                InputLabelProps={{ style: { color: "#7127ba" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                fullWidth
                style={{
                  backgroundColor: "transparent",
                  marginBottom: "10px",
                  width: "70%",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                InputLabelProps={{ style: { color: "#7127ba" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                name="number"
                value={toSend.number}
                onChange={handleChange}
                fullWidth
                style={{
                  backgroundColor: "transparent",
                  marginBottom: "10px",
                  width: "70%",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                InputLabelProps={{ style: { color: "#7127ba" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                name="message"
                value={toSend.message}
                onChange={handleChange}
                fullWidth
                style={{
                  backgroundColor: "transparent",
                  marginBottom: "20px",
                  width: "70%",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                InputLabelProps={{ style: { color: "#7127ba" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <Button
                variant="contained"
                type="submit"
                size="small"
                style={{
                  background: "#7127ba",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
