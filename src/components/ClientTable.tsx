import ClientRow from "./ClientRow";

const ClientTable = () => {
  const clients = [
    {
      id: 1,
      firstName: "Amine",
      lastName: "Saki",
    },
    {
      id: 2,
      firstName: "Ibrahim",
      lastName: "Saki",
    },
    {
      id: 3,
      firstName: "Siham",
      lastName: "Mouli",
    },
    {
      id: 4,
      firstName: "Karam",
      lastName: "Mouli",
    },
  ];

  return (
    <table
      style={{
        backgroundColor: "yellowgreen",
      }}
    >
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Incremented</th>
          <th>Decremented</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => {
          return (
            <ClientRow
              key={client.id}
              id={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ClientTable;
