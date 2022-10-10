export default function Footer() {
  return (
    <div className=" bg-blue-300 flex flex-col gap-2 items-center border-t-2 border-t-blue-100 py-4">
      <h3 className="font-medium text-lg">Contact Me!</h3>
      <div>
        <a href="https://www.linkedin.com/in/azamfiredenis/" target="_blank">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div>
        <a href="mailto:azamfiredenis@yahoo.com?subject=I have some work regarding web development">
          <i class="fa-solid fa-at"></i> Email Me!
        </a>
      </div>
    </div>
  );
}
