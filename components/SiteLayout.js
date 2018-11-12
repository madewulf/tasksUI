import Header from './Header'

const layoutStyle = {
      margin: 20,
      padding: 20,
}

const Layout = (props) => (
  
  <div style={layoutStyle} className="container">
    <Header />

    {props.children}
    
  </div>
)

export default Layout

