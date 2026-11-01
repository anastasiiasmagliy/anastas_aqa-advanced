


const axios = require('axios');

async function fetchData() {
    try {
        const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
        
        console.log(res.constructor.name); // 'Object', підтверджує, що `res` — це POJO
        console.log(res.data); // Виведе отримані дані
        console.log(res.data instanceof Object); // true
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
