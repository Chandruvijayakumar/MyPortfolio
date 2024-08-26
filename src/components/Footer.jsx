export default function Footer() {
  return (
    <div className="w-full py-8 bg-base-100 shadow-sm border-t border-current border-opacity-30 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/sharmaaryan/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-transparent border-none hover:bg-transparent hover:scale-125 transition-transform duration-300"
      >
        <img
          src="https://www.svgrepo.com/show/448234/linkedin.svg"
          alt="LinkedIn"
          className="h-6 w-6 fill-current text-base-content"
        />
      </a>
    </div>
  );
}
