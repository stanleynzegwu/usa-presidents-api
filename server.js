const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

const presidents = {
    'george bush': {
        'name': 'George Bush',
        'year': '1989-1993',
        'vice president': 'Dan Quayle',
        'first lady': 'Barbara Bush'
    },
    'bill clinton': {
        'name': 'Bill Clinton',
        'year': '1993-2001',
        'vice president': 'Albert Gore',
        'first lady': 'Hillary Rodham Clinton'
    },
    'goerge w bush': {
        'name': 'Goerge W Bush',
        'year': '2001-2009',
        'vice president': 'Richard Cheney',
        'first lady': 'Laura Bush'
    },
    'barack obama': {
        'name': 'Barack Obama',
        'year': '2009-2017',
        'vice president': 'Joseph R biden',
        'first lady': 'Michelle Obama'
    },
    'donald trump': {
        'name': 'Donald J Trump',
        'year': '2017-2021',
        'vice president': 'Mike Pence',
        'first lady': 'Melania Trump'
    },
    'joe biden': {
        'name': 'Joseph R Biden',
        'year': '2021-present',
        'vice president': 'Kamala Harris',
        'first lady': 'Jill Biden'
    },
    'unknown': {
        'name': 'unknown',
        'year': 'unknown',
        'vice president':'unknown',
        'first lady': 'unknown'
    }
}

app.get('/',(req,res) => {
res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req,res) => {
    res.json(presidents)
})

app.get('/api/:name', (req,res) => {
    const president = req.params.name.toLowerCase()
    if( presidents[president]){
        res.json(presidents[president])
    }else{
        res.json(presidents['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port ${PORT}`)
})