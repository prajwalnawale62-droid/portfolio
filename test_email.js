const http = require('https');

const data = JSON.stringify({
  service_id: 'service_2ji8fyg',
  template_id: 'template_m3i8und',
  user_id: '3smCEWqks5tzyg4sT',
  template_params: {
    from_name: 'Test Name',
    from_email: 'test@example.com',
    message: 'Testing from nodejs'
  }
});

const options = {
  hostname: 'api.emailjs.com',
  port: 443,
  path: '/api/v1.0/email/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${responseData}`);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();
