import React, { useState, useEffect } from 'react';

export function Client() {
        const [clients, setClients] = useState([]);
        useEffect(() => {
          const mockClients = [
            { id: 1, name: 'Alice Krandall', address: '123 Main St' },
            { id: 2, name: 'Bob Stevens', address: '456 Oak Ave' },
            { id: 3, name: 'Carol Bakedbean', address: '789 Pine Ln' }
          ];
      
          setClients(mockClients);
      
        }, []);
        return (
            <main>
              <h1>Client Database</h1>
              <button>Record New Client</button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.id}>
                      <td>{client.name}</td>
                      <td>{client.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>
          );
}