
function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Copyright Section */}
          <div className="col-md-6">
            <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
          </div>

          {/* Social Media Links Section */}
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">Facebook</a>
            <a href="#" className="me-3">Twitter</a>
            <a href="#" className="me-3">Instagram</a>
            <a href="#" className="me-3">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
