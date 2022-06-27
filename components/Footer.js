export const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100px;
          margin-top: auto;
          box-shadow: 0 0 5px rgba(0,0,0,1);
        }

        footer img {
          margin-left: 0.5rem;
          width: 50%;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
    </>
  )
}

