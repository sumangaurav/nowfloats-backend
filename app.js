// imports start here
const express = require('express')
const path = require('path')


// imports end here

// declarations

const app = express()
const PORT = 3001

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

const slotDataObj = {
  "morning": [
    {
      "text": "10:00 AM",
      "available": true
    },
    {
      "text": "10:30 AM",
      "available": false
    },
    {
      "text": "11:00 AM",
      "available": true
    },
    {
      "text": "11:30 AM",
      "available": true
    },
    {
      "text": "12:00 PM",
      "available": false
    },
    {
      "text": "12:30 PM",
      "available": true
    },
    {
      "text": "01:00 PM",
      "available": false
    },
    {
      "text": "01:30 PM",
      "available": true
    },
    {
      "text": "02:00 PM",
      "available": false
    }
  ],
  "evening": [
    {
      "text": "02:30 PM",
      "available": false
    },
    {
      "text": "03:00 PM",
      "available": false
    },
    {
      "text": "03:30 PM",
      "available": false
    },
    {
      "text": "04:00 PM",
      "available": true
    },
    {
      "text": "04:30 PM",
      "available": false
    },
    {
      "text": "05:00 PM",
      "available": true
    },
    {
      "text": "05:30 PM",
      "available": false
    },
    {
      "text": "06:00 PM",
      "available": true
    },
    {
      "text": "06:30 PM",
      "available": false
    }
  ],
  "night": [
    {
      "text": "07:00 PM",
      "available": false
    },
    {
      "text": "07:30 PM",
      "available": false
    },
    {
      "text": "08:00 PM",
      "available": false
    },
    {
      "text": "08:30 PM",
      "available": true
    },
    {
      "text": "09:00 PM",
      "available": true
    },
    {
      "text": "09:30 PM",
      "available": false
    },
    {
      "text": "10:00 PM",
      "available": true
    },
    {
      "text": "10:30 PM",
      "available": true
    },
    {
      "text": "11:00 PM",
      "available": true
    }
  ]
}

app.get('/api', (req, res) => {
    console.log("received get request from client", req.query)
    setTimeout(() => res.json(slotDataObj), 2000);
    
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
