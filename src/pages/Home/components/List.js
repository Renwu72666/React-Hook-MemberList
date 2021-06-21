import Item from "./Item";

const List = ({ listData, deleteData }) => {
  console.log("listData", listData);
  return (
    <>
      <main>
        <ol className="gradient-list">
          {
            listData.map((items) => {
              const { firstName, lastName, id } = items;
              return (
                <Item
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  deleteData={deleteData}
                />
              );
            })
            // <Item key={items} />
          }
        </ol>
      </main>
    </>
  );
};

export default List;
