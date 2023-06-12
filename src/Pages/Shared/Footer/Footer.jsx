import img from '../../../assets/icon/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-pink-50">
  <div>
 <img className='h-20 w-32 rounded-3xl' src={img} alt="" />
    <p className='text-black'>Immerse Yourself in Our Captivating <br /> Gallery and Unleash Your <br /> Creative Potential</p>
  </div> 
  <div>
    <span className="footer-title text-lg text-black">Links</span> 
    <a className="link link-hover text-pink-500 font-semibold">Home</a> 
    <a className="link link-hover text-pink-500 font-semibold">Instructors</a> 
    <a className="link link-hover text-pink-500 font-semibold">Classes</a>
  </div> 
  <div>
    <span className="footer-title text-lg text-black">Subscribe us</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-pink-500 font-semibold">Enter email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="E-mail" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-pink-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;