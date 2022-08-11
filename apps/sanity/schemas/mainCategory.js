export default {
  name: "mainCategory",
  type: "document",
  title: "Main Category",
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
      name: "subCategories",
      title: "List of SubCategories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .error("You have to add minimum 1 category!"),
        Rule.required()
          .unique()
          .error("You have to add unique categories!")
      ]
    }
  ]
};
