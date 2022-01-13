import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import contactService from "../../services/contact-service";
import Contact from "./Contact";

const ListContact = (props) => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    contactService.getAllContact().then((data) => {
      setContacts(data.result);
    });
  }, []);

  const onDelete = (id) => {
    contactService.deleteContactById(id).then((data) => {
      let newContacts = contacts.filter((i) => i.id !== id);
      setContacts(newContacts);
    });
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <div className="card">
          <div className="card-header py-3 shadow mb-4">Tất cả post</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <td>ID</td>
                <td>Title</td>
                <td>Content</td>
                <td>Create At</td>
              </thead>
              <tbody>
                {contacts &&
                  contacts.length > 0 &&
                  contacts.map((item) => (
                    <Contact onDelete={onDelete} key={item.id} obj={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContact;
