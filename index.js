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
  const {
    data
  } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Missing required fields in the request body' });
  }

  
  const alphabetsArr = data.filter((element) => (element>='A' && element <='Z') || (element>='a' && element<='z'));
  const numsArr = data.filter((element) => !alphabetsArr.includes(element));
  
    
    
    
    // Calculate the highest alphabet from the input array
  const highestAlphabet = alphabetsArr.reduce((max, current) =>
    current > max ? current : max
  );
  const maxAlphabet = [];
  if(highestAlphabet){
    maxAlphabet.push(highestAlphabet);
  }

  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers:numsArr,
    alphabets:alphabetsArr,
    highest_alphabet : maxAlphabet,
  };

  return res.status(200).json(response);
});



app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});





