import Link from 'next/link'

export default (props) => {
return <div><Link as={props.alias} href={props.href}>
<button>Create a list</button>
</Link>
</div>
}