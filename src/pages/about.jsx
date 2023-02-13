import { useRouter } from 'next/router'

export default function Page(props) {
    const router = useRouter()
    return (
        <div>
            about us
            <div onClick={() => router.push('/')}>to homepage</div>
        </div>
    )
}

export async function getStaticProps() {
    return { props: { title: 'about us' } }
  }