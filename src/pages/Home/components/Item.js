const Item = ({ id, firstName, lastName, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <li>
        <label> First Name:</label>
        <p> {firstName} </p>
        <br />
        <label> Last Name:</label>
        <p> {lastName} </p>
        <br />
        <label> Email:</label>
        <br />
        <label> Sex :</label>
        <br />
        <input
          className="button"
          onClick={deleteItem}
          type="submit"
          value="Remove"
        />
      </li>
    </>
  );
};

export default Item;
