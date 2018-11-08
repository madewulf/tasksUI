import Link from 'next/link'

export default (props) => {
return <div><Link as={props.alias} href={props.href}>
<button className="big-button">Create a list</button>
</Link>
<style jsx>{`
.big-button {
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 4px;
}
`}</style>
</div>
}