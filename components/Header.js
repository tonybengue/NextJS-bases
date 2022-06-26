export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>Welcome</li>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </header>

      <style jsx>{`
        header {
          width: 100%;
          box-shadow: 0 0 5px rgba(0,0,0,1);
        }

        header ul {
          padding-left: 0;
          list-style: none;
        }
      `}
      </style>
    </>
  )
}

