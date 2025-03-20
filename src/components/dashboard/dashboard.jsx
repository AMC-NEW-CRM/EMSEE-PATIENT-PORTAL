import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    return <div className="container" style={{paddingTop: "20px"}}>
      <div className = "row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" style={{height: "247px", backgroundColor: "lightgrey"}}>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center"> <div className="p-4 easy-use text-start d-block gap-2 align-items-start features-section">
        <div className="mb-3"></div> <div> <h6 className="fw-semibold mb-2 mt-3">Ready to take control of your health? Emsee is here to support you!</h6>
            <p className="mb-0 fs-13"> ✅ Book your first appointment at NO COST</p>
            <p className="mb-0 fs-13"> ✅ Get expert guidance from trusted professionals</p>
            <p className="mb-0 fs-13"> ✅ Hassle-free & quick booking</p>
            </div> </div> </div>
      </div>
      <div className="row" style={{marginTop:"20px", backgroundColor:"white"}}>
        <h2>
            My Health
        </h2>
        <a onClick={() => navigate(`${import.meta.env.BASE_URL}dashboard/MedicalRecords`)} aria-label="anchor" style={{width: "400px"}} class="btn btn-lg btn-orange text-white min-w-btn rounded-pill" target="_blank">
        <i class="bi bi-eye align-middle me-2"></i>Medical History</a>
      </div>
      <div className="row" style={{marginTop:"20px", backgroundColor:"white"}}>
        <h2>
            Recommend for you
        </h2>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">LoreSumIp</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">LoreSumIp</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">LoreSumIp</button>
        </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <div class="row">
        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" key="123">
          <div className="custom-card card">
            <div className="card-body">
              <h6 className="card-title fw-medium">LoreSumpip</h6>
              <p className="card-text text-muted">LoreSumpip</p>
            </div>
            <div className="card-footer">
              <span>
                <span className="card-text">
                  Last updated LoreSumpip by LoreSumpip
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" key="123">
          <div className="custom-card card">
            <div className="card-body">
              <h6 className="card-title fw-medium">LoreSumpip</h6>
              <p className="card-text text-muted">LoreSumpip</p>
            </div>
            <div className="card-footer">
              <span>
                <span className="card-text">
                  Last updated LoreSumpip by LoreSumpip
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" key="123">
          <div className="custom-card card">
            <div className="card-body">
              <h6 className="card-title fw-medium">LoreSumpip</h6>
              <p className="card-text text-muted">LoreSumpip</p>
            </div>
            <div className="card-footer">
              <span>
                <span className="card-text">
                  Last updated LoreSumpip by LoreSumpip
                </span>
              </span>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
}

export default Dashboard;