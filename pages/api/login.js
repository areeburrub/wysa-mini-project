// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler (req, res) {
  const email = req.body.email;
  const pswd = req.body.password;
  if (email == 'admin@example.com' && pswd == 'secretPswd') {
    res.status(200).json({
      name: 'John Doe',
      id: '00xx11'
    })
  } else {
    res.status(401).json({
      error: 'Invalid credentials'
    })
  }
}
