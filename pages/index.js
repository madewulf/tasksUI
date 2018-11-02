import Layout from '../components/SiteLayout.js'
import Link from 'next/link'

const ListLink = (props) => (
  <li>
    <Link as={`/l/${props.id}`} href={`/list?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <ul>
      <ListLink id="ndxlj" title="Week-end à la mer"/>
    </ul>
  </Layout>
)
