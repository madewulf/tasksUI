import Layout from '../components/SiteLayout.js'
import Button from '../components/Button'
import Link from 'next/link'

export default () => (
  <Layout>
      <div className="row"><img style={{width:"100%", border:"1px solid #bbb", borderRadius: "5px"}} src="/static/hero-2.jpg"/> </div>
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
