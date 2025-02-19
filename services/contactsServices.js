import Contact from "../db/models/Contact.js";

const listContacts = () => Contact.findAll();

const getContactById = (contactId) => Contact.findByPk(contactId);

const removeContact = async (contactId) => {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  await contact.destroy();

  return contact;
};

const addContact = (data) => Contact.create(data);

const updateContact = async (contactId, data) => {
  // const contact = await getContactById(contactId);

  // if (!contact) return null;

  // return contact.update(data, { returning: true });

  const [count, updatedRows] = await Contact.update(data, {
    where: { id: contactId },
    returning: true,
  });

  if (!count) return null;

  const [updatedContact] = updatedRows;

  return updatedContact;
};

const updateStatusContact = async (contactId, data) => {
  // const contact = await getContactById(contactId);

  // if (!contact) return null;

  // return contact.update(data, { returning: true });

  const [count, updatedRows] = await Contact.update(data, {
    where: { id: contactId },
    returning: true,
  });

  if (!count) return null;

  const [updatedContact] = updatedRows;

  return updatedContact;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
