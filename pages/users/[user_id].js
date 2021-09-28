import { useRouter } from 'next/router'

export default function User() {
  const router = useRouter()
  return(
    <>
      <p>El usuario es el {router.query.user_id}</p>
    </>
  )
}
