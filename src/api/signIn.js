import SUPABASE_KEY from '../apikey'
const signIn = (email, password) => (
    fetch('https://vikrybiztqeanihgvgkm.supabase.co/auth/v1/token?grant_type=password',
    {   
        method: 'POST',
        headers: {
            'apikey': SUPABASE_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;