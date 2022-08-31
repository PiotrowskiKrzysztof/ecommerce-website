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
    },
    {
      name: "parent",
      title: "Parent",
      type: "reference",
      to: [{ type: "mainCategory" }],
      validation: (Rule) =>
        Rule.required().error("You have to add parent reference!")
    }
  ]
};
