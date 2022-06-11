import "./mailList.css"

const MailList = () => {
  return (
    <div className="row mail">
      
      <div className="col-md-12 d-flex justify-content-center align-items-center flex-column gap-3">
                <h5 className="text-white mb-4">Newsletter Subscribe Now</h5>
                <h1 className="text-warning">Save time, save money!</h1>
                <span className="mailDesc">Sign up and we'll send the best deals to you</span>
                
                <div className="position-relative mx-auto" Style={{width: "400px"}}>
                    <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
    </div>
  )
}

export default MailList