const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 🔹 Replace with your details
const FULL_NAME = "abhir_bansal";     // full name, lowercase, use "_" if space
const DOB = "19022004";           // ddmmyyyy
const EMAIL = "abhir.bansal2022@vitstudent.ac.in";     // your email
const ROLL_NO = "22BCE0418";        // your roll number

// POST /bfhl route
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (/^-?\d+$/.test(item)) {  // number check
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    // concat string → reverse + alternating caps
    let concat_string = alphabets
      .join("")         // merge if multiple-letter words
      .split("")        // split into chars
      .reverse()        // reverse order
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NO,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });

  } catch (error) {
    res.status(500).json({
      is_success: false,
      message: error.message
    });
  }
});

// default port for local run
app.listen(3000, () => console.log("✅ Server running on port 3000"));
