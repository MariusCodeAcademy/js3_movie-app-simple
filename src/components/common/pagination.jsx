// statless functional component
const Pagination = (props) => {
  const { itemCount, pageSize } = props;
  // ic 9 ps 4
  // [1, 2, 3]
  const pageCount = Math.ceil(itemCount / pageSize);
  console.log('pageCount', pageCount);

  const pages = () => {
    const arr = [];
    for (let i = 1; i <= pageCount; i++) {
      arr.push(i);
    }
    return arr;
  };

  console.log(pages());

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="/" className="page-link">
            1
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
