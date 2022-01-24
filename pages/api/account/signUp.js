export default async function (req, res){
  if(req.method === 'POST'){
    const { username, email, password } = req.body

    const body = JSON.stringify({
      username, 
      email,
      password
    })
    try{
      const apiRes = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/api/auth/regiter/`, {
        method: 'POST',
        headers:{
          'content-Type':'application/json'
        },
        body: body
      })
      const data = await apiRes.json()
      if(apiRes ===201){
        return res.status(200).json({
          success:'アカウントの登録ができました。'
        })

      }else{
        return res.status(apiRes.status).json({
          error: 'アカウントの登録ができませんでした。'
        })

      }

    }catch(error){
      return res.status(500).json({
        error: 'アカウントの登録ができませんでした'
      })
    }




  }else{
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed`})
  }
}