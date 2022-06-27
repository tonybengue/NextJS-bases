import Link from "next/link"

export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/">Welcome</Link></li>
          <li><Link href="/posts/first">First Post</Link></li>
          <li><Link href="/posts/second">Second Post</Link></li>
        </ul>
      </header>

      <style jsx>{`
        header {
          width: 100%;
          box-shadow: 0 0 5px rgba(0,0,0,1);
          background-color: green;
        }

        header ul {
          padding-left: 0;
          padding: 0 1rem;
          list-style: none;
          display: flex;
        }

        header ul li:first-child {
          margin-right: auto;
        }
      `}
      </style>
    </>
  )
}

