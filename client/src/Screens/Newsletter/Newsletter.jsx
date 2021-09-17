import './Newsletter.css'
import Layout from "../../Components/Layout/Layout"
import Alert from "react-bootstrap/Alert";
import { useState } from 'react';
const Newsletter = (props) => {
  const [show, setShow] = useState(false)





  return (
    <Layout user={props.user}>
      <div className='fixit'>
        <div className="newsletter-container">
          <label className='label-stuff' htmlFor="name">Name</label>
          <input type="text" />


          <label className='label-stuff' htmlFor="email-newsletter">Email</label>
          <input type="text" />

          <div className="news-bottom">
            <button className="news-submit" onClick={() => setShow(true)}>Send</button>
            <Alert variant="success" id="news-alert" show={show}>
              Enjoy Your News On Our Great Frames!
            </Alert>

          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Newsletter