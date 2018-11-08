import Layout from '../components/SiteLayout.js'
import Button from '../components/Button'
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
  <div>
    <div>1. Create a to-do list</div> 
    <div>2. Share it to your team</div>
    <div>3. Let them assign the tasks to themselves</div>
    <div>4. Receive email updates as tasks get done</div>
  </div>
<Button alias={'/create'} href={'/create'}></Button>
  </Layout>
)
