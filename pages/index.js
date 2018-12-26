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
      <div className="row"><img style={{width:"100%", border:"1px solid #bbb", "border-radius": "5px"}} src="https://s3.eu-central-1.amazonaws.com/static.btlas.com/hero-2.jpg"/> </div>
    <div className="row">
      <div>1. Create a to-do list</div>
      <div>2. Share it with other people</div>
      <div>3. Let them assign the tasks to themselves</div>
    </div>
    <div className="row">
      <div>
          <br />
        <Button alias={'/create'} href={'/create'}></Button>
      </div>
    </div>

  </Layout>
)
