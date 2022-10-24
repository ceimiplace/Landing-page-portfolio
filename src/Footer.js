export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center border-t-2 text-white border-t-[#DAA520] py-4">
      <h3 className="font-medium text-lg">Contact Me!</h3>
      <div>
        <a href="https://www.linkedin.com/in/azamfiredenis/" target="_blank">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div>
        <a href="mailto:azamfiredenis@yahoo.com?subject=I have some work regarding web development">
          <i className="fa-solid fa-at"></i> Email Me!
        </a>
      </div>
    </footer>
  );
}
