import Header from './Header'

const Layout = (props) => (

  <div className="container">
      <link href="/static/fa/css/all.css" rel="stylesheet" />
    <Header />

    {props.children}
      <style jsx global>
          {`
          .userName {
              padding:3px;
              border-radius: 3px;
              margin-right:3px;
          }

          .container {
            margin:20px auto;
          }

          .userName.orange {
              color: #ff8C00;
              border: 1px solid #ff8C00;
          }

          .userName.orange.butt {
              color: white;
              background-color: #ff8C00;
              border: 1px solid #ff8C00;
          }

          .userName.red {
              color: #e81123;
              border: 1px solid #e81123;
          }

          .userName.red.butt {
              color: white;
              background-color: #e81123;
              border: 1px solid #e81123;
          }

          .userName.pink {
              color: #ec008C;
              border: 1px solid #ec008C;
          }

          .userName.pink.butt {
              color: white;
              background-color: #ec008C;
              border: 1px solid #ec008C;
          }

          .userName.purple {
              color: #68217a;
              border: 1px solid #68217a;
          }

          .userName.purple.butt {
              color: white;
              background-color: #68217a;
              border: 1px solid #68217a;
          }

          .userName.blue {
              color: #00188F;
              border: 1px solid #00188F;
          }

          .userName.blue.butt {
              color: white;
              background-color: #00188F;
              border: 1px solid #00188F;
          }

          .userName.lightblue {
              color: #00bcf2;
              border: 1px solid #00bcf2;
          }

          .userName.lightblue.butt {
              color: white;
              background-color: #00bcf2;
              border: 1px solid #00bcf2;
          }

          .userName.lightgreen {
              color: #00b294;
              border: 1px solid #00b294;
          }

          .userName.lightgreen.butt {
              color: white;
              background-color: #00b294;
              border: 1px solid #00b294;
          }

          .userName.green {
              color: #009e49;
              border: 1px solid #009e49;
          }

          .userName.green.butt {
              color: white;
              background-color: #009e49;
              border: 1px solid #009e49;
          }

           .butt {
              width : 95%;
              text-align: center;
           }
          .userButton {
             font-size: 1.25em;
             font-weight: bold;
             padding: 5px 0 5px 0;
          }
    `}
      </style>
  </div>
)

export default Layout

