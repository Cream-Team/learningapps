const SUPABASE_KEY = require('../apikey')
const signIn = (email, password) => (
    fetch('https://vikrybiztqeanihgvgkm.supabase.co/auth/v1/token?grant_type=password',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'apikey': SUPABASE_KEY
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;