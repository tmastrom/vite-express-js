import { useLoaderData } from "react-router-dom";

export async function loader() {
  return await fetch("/api/contacts");
}

export default function Contacts() {
  const { contacts } = useLoaderData();

  return (
    <>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.age} years old
            </li>
          );
        })}
      </ul>
    </>
  );
}
