import { InputText } from "primereact/inputtext";

export const CreateTopicForm = () => {
  return (
    <div className="p-fluid">
      Create New Topic
      <div className="p-field py-3">
        <label htmlFor="firstname1">Name:</label>
        <InputText
          id="firstname1"
          className="rounded-lg shadow-md border-gray-500 px-5 border"
          type="text"
        />
      </div>
      <div className="p-field py-3">
        <label htmlFor="lastname1">Description</label>
        <InputText
          id="lastname1"
          className="rounded-lg shadow-md border-gray-500 px-5 border"
          type="text"
        />
      </div>
      <div className="p-field py-3">
        <label htmlFor="submit">Create</label>
        <button
          id="submit"
          className="rounded-lg shadow-md border-gray-500 px-5 border"
        >
          Create
        </button>
      </div>
    </div>
  );
};
