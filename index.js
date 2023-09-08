const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080;
app.use(express.json());



app.get('/bfhl', (req, res) => {
    return res.status(200).json({
        "operation_code" :1
    });
});


app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];

    if (!data.length || !data.every(item => typeof item === 'string')) {
      return res.status(400).json({ is_success: false, error_message: 'Invalid input data format' });
    }

    // Process the data and generate the response here
    const alphabetsArr = data.filter((element) => (element>='A' && element <='Z') || (element>='a' && element<='z'));
    const numsArr = data.filter((element) => !alphabetsArr.includes(element));
     // Calculate the highest alphabet from the input array
     let highestAlphabet = null;

     for (const item of data) {
       if (/^[a-zA-Z]$/.test(item)) {
         if (!highestAlphabet || item.localeCompare(highestAlphabet) > 0) {
           highestAlphabet = item;
         }
       }
     }
    const maxAlphabet = [];
    if(highestAlphabet){
        maxAlphabet.push(highestAlphabet);
    }

    const response = {
        is_success: true,
        user_id: 'yash_kishore_parwani_05032002',
        email: 'yp1257@srmist.edu.in',
        roll_number: 'RA2011033010003',
        numbers:numsArr,
        alphabets:alphabetsArr,
        highest_alphabet : maxAlphabet,
      };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ is_success: false, error_message: error.message });
  }

 
});

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});





