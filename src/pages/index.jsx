import { useRouter } from 'next/router'

export default function Page(props) {
    const router = useRouter()
    return (
        <div>
            homepage
            <div onClick={() => router.push('/about')}>to about</div>
        </div>
    )
}

export async function getStaticProps() {
    return { props: { title: 'homepage' } }
  }