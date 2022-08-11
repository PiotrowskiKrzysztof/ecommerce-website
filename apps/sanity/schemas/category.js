export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required!")
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    }
  ]
};
